const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

const SUBSTACK_URL = 'https://kyrtin.substack.com/api/v1/posts';
const ESSAYS_DIR = path.join(__dirname, 'src', 'essays');
const BATCH_SIZE = 50;

const turndown = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced'
});

turndown.addRule('removeImages', {
  filter: ['img', 'figure', 'picture'],
  replacement: () => ''
});

function cleanMarkdown(html) {
  html = html.replace(/<div[^>]*class="[^"]*subscription-widget[^"]*"[^>]*>[\s\S]*?<\/form>\s*<\/div>\s*<\/div>\s*<\/div>/gi, '');
  html = html.replace(/<div[^>]*class="[^"]*captioned-image-container[^"]*"[^>]*>[\s\S]*?<\/figure>\s*<\/div>/gi, '');
  html = html.replace(/<div[^>]*data-component-name="SubscribeWidgetToDOM"[^>]*>[\s\S]*?<\/form>\s*<\/div>\s*<\/div>\s*<\/div>/gi, '');

  let md = turndown.turndown(html);

  md = md.replace(/Thanks for reading Kyrtin[\u2019']s Substack!?\s*Subscribe for free to receive new posts and support my work\./gi, '');
  md = md.replace(/Thanks for reading Kyrtin&#8217;s Substack!?\s*Subscribe for free to receive new posts and support my work\./gi, '');
  md = md.replace(/^\s*Subscribe\s*$/gm, '');
  md = md.replace(/!\[\]\([^)]*\)/g, '');
  md = md.replace(/\n{3,}/g, '\n\n');

  md = md.replace(/\[([^\]]*)\]\(([^)]*)\)/g, (match, text, url) => {
    const cleanUrl = url.replace(/\\_/g, '_');
    const cleanText = text.startsWith('http') ? text.replace(/\\_/g, '_') : text;
    return `[${cleanText}](${cleanUrl})`;
  });

  md = md.replace(/(?<!\]\()(?<!\()(?<!\[)(https?:\/\/[^\s\)>\]]+)/g, (match) => {
    const clean = match.replace(/\\_/g, '_');
    return `[${clean}](${clean})`;
  });

  return md.trim();
}

function slugifyTitle(title) {
  return title
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[^a-zA-Z0-9\s\-_'"(),.!?&%]/g, '')
    .replace(/\s+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

function getLatestEssay() {
  const files = fs.readdirSync(ESSAYS_DIR).filter(f => f.endsWith('.md') && f !== 'index.md');
  let maxNum = 0;
  let latestDate = '2000-01-01';

  for (const f of files) {
    const numMatch = f.match(/^(\d+)/);
    if (!numMatch) continue;
    const num = parseInt(numMatch[1], 10);
    if (num > maxNum) maxNum = num;

    const content = fs.readFileSync(path.join(ESSAYS_DIR, f), 'utf-8');
    const dateMatch = content.match(/date:\s*"([^"]+)"/);
    if (dateMatch && dateMatch[1] > latestDate) {
      latestDate = dateMatch[1];
    }
  }

  return { maxNum, latestDate };
}

async function fetchNewPosts(cutoffDate) {
  const cutoff = new Date(cutoffDate + 'T23:59:59Z');
  const allPosts = [];
  let offset = 0;
  let hasMore = true;

  while (hasMore) {
    const url = `${SUBSTACK_URL}?offset=${offset}&limit=${BATCH_SIZE}&sort=new`;
    const resp = await fetch(url);
    const posts = await resp.json();

    if (!posts || posts.length === 0) {
      hasMore = false;
    } else {
      allPosts.push(...posts);
      offset += BATCH_SIZE;

      const oldestInBatch = new Date(posts[posts.length - 1].post_date);
      if (oldestInBatch <= cutoff) hasMore = false;
      if (posts.length < BATCH_SIZE) hasMore = false;
    }
  }

  return allPosts
    .filter(p => new Date(p.post_date) > cutoff)
    .sort((a, b) => new Date(a.post_date) - new Date(b.post_date));
}

async function main() {
  const { maxNum, latestDate } = getLatestEssay();
  console.log(`Latest essay: #${maxNum}, date: ${latestDate}`);

  const newPosts = await fetchNewPosts(latestDate);
  console.log(`Found ${newPosts.length} new post(s) after ${latestDate}`);

  if (newPosts.length === 0) {
    console.log('Nothing to sync.');
    return;
  }

  let essayNumber = maxNum + 1;
  let created = 0;

  for (const post of newPosts) {
    const title = post.title;

    if (!post.body_html || post.body_html.trim() === '') {
      console.log(`  SKIP (empty): ${title}`);
      continue;
    }

    const date = new Date(post.post_date).toISOString().split('T')[0];
    const markdown = cleanMarkdown(post.body_html);
    const slug = slugifyTitle(title);
    const paddedNum = String(essayNumber).padStart(3, '0');
    const filename = `${paddedNum}_${slug}.md`;
    const escapedTitle = title.replace(/"/g, '\\"');

    const subtitle = post.subtitle ? post.subtitle.trim() : '';
    const descLine = subtitle
      ? `\ndescription: "${subtitle.replace(/"/g, '\\"')}"`
      : '';

    const content = [
      '---',
      `title: "${paddedNum} - ${escapedTitle}"`,
      'layout: essay.njk',
      `date: "${date}"${descLine}`,
      '---',
      '',
      markdown,
      ''
    ].join('\n');

    fs.writeFileSync(path.join(ESSAYS_DIR, filename), content);
    console.log(`  ${paddedNum}: ${title} (${date})`);
    essayNumber++;
    created++;
  }

  console.log(`\nCreated ${created} new essay(s) (#${maxNum + 1} to #${essayNumber - 1})`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
