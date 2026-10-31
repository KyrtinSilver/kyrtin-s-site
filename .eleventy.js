const rssPlugin = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addGlobalData("now", new Date());

  const md = new markdownIt({
    html: true,
    linkify: true,
    typographer: true
  });

  const mdSite = new markdownIt({
    html: true,
    typographer: true
  });
  eleventyConfig.setLibrary("md", mdSite);

  const mdSmart = new markdownIt("zero", { typographer: true });
  mdSmart.core.ruler.enable(["replacements", "smartquotes"]);
  mdSmart.inline.ruler.enable(["text"]);

  function smartText(value) {
    if (!value) return "";
    const withRanges = String(value).replace(/\b((?:19|20)\d\d)-((?:19|20)\d\d)\b/g, "$1\u2013$2");
    const parsed = mdSmart.parseInline(withRanges, {});
    return parsed[0] && parsed[0].children ? parsed[0].children.map((t) => t.content).join("") : withRanges;
  }

  eleventyConfig.addFilter("smartText", smartText);

  eleventyConfig.addFilter("rssContent", function(content) {
    if (!content) return "";
    const html = md.render(content);
    return html
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#39;/g, "'");
  });

  eleventyConfig.addCollection("essays", function (collection) {
    return collection
      .getFilteredByGlob("src/essays/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => {
        const aDate = a.data.date ? new Date(a.data.date) : a.date;
        const bDate = b.data.date ? new Date(b.data.date) : b.date;

        const dateComparison = bDate - aDate;
        if (dateComparison !== 0) return dateComparison;

        const aMatch = a.data.title.match(/^(\d+)/);
        const bMatch = b.data.title.match(/^(\d+)/);

        const aNum = aMatch ? parseInt(aMatch[1]) : 0;
        const bNum = bMatch ? parseInt(bMatch[1]) : 0;

        return bNum - aNum;
      });
  });

  eleventyConfig.addCollection("essaysByYear", function (collection) {
    const essays = collection
      .getFilteredByGlob("src/essays/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => {
        const aDate = a.data.date ? new Date(a.data.date) : a.date;
        const bDate = b.data.date ? new Date(b.data.date) : b.date;
        if (bDate - aDate !== 0) return bDate - aDate;
        const aNum = parseInt((String(a.data.title || "").match(/^(\d+)/) || [0, 0])[1], 10);
        const bNum = parseInt((String(b.data.title || "").match(/^(\d+)/) || [0, 0])[1], 10);
        return bNum - aNum;
      });
    const groups = [];
    essays.forEach((item) => {
      const d = item.data.date ? new Date(item.data.date) : item.date;
      const year = String(d.getUTCFullYear());
      let group = groups[groups.length - 1];
      if (!group || group.year !== year) {
        group = { year, items: [] };
        groups.push(group);
      }
      group.items.push(item);
    });
    return groups;
  });

  eleventyConfig.addCollection("research", function (collection) {
    return collection
      .getFilteredByGlob("src/research/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => {
        const aDate = a.data.date ? new Date(a.data.date) : a.date;
        const bDate = b.data.date ? new Date(b.data.date) : b.date;
        return bDate - aDate;
      });
  });

  eleventyConfig.addFilter("date", (dateObj) => {
    if (!dateObj) return "";
    const utcDate = new Date(dateObj);
    utcDate.setUTCHours(12, 0, 0, 0);
    if (isNaN(utcDate.getTime())) return "";
    return utcDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  eleventyConfig.addFilter("archiveNumber", (title) => {
    const match = String(title || "").match(/^(\d+)\s+-\s+/);
    return match ? match[1] : "";
  });

  eleventyConfig.addFilter("archiveName", (title) => {
    const text = String(title || "");
    const match = text.match(/^\d+\s+-\s+([\s\S]+)$/);
    return smartText(match ? match[1] : text);
  });

  eleventyConfig.addFilter("jsonString", (value) => JSON.stringify(String(value ?? "")));

  eleventyConfig.addFilter("isoDateOnly", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    if (isNaN(d.getTime())) return "";
    return d.toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("yearOf", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return isNaN(d.getTime()) ? "" : String(d.getUTCFullYear());
  });

  eleventyConfig.addFilter("monthDay", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
  });

  /* Position (0–100%) of a date along the research timeline, 2017–2027. */
  eleventyConfig.addFilter("timelinePos", (dateObj) => {
    const start = Date.UTC(2017, 0, 1);
    const end = Date.UTC(2027, 0, 1);
    const t = new Date(dateObj).getTime();
    if (isNaN(t)) return "0";
    return Math.min(100, Math.max(0, ((t - start) / (end - start)) * 100)).toFixed(2);
  });

  const VENUES = [
    "Studies in Computational Intelligence",
    "Biologically Inspired Cognitive Architectures",
    "Cognitive Systems Research",
  ];
  eleventyConfig.addFilter("venueOf", (tags) => {
    if (!Array.isArray(tags)) return "";
    const found = tags.filter((t) => VENUES.includes(t));
    return found.length ? found[found.length - 1] : "";
  });
  eleventyConfig.addFilter("topicTags", (tags) => {
    if (!Array.isArray(tags)) return [];
    return tags.filter((t) => !VENUES.includes(t) && t !== "research");
  });

  eleventyConfig.addFilter("sourceName", (url) => {
    if (!url) return "";
    let host = "";
    try { host = new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return ""; }
    const names = {
      "researchgate.net": "ResearchGate",
      "sciencedirect.com": "ScienceDirect",
      "bibliotekanauki.pl": "Biblioteka Nauki",
      "ojs.bonviewpress.com": "Journal of Data Science and Intelligent Systems",
      "link.springer.com": "Springer",
    };
    return names[host] || host;
  });

  /* A description ending in an ellipsis, containing unbalanced quotation
     marks, or leaking raw Markdown blockquote markers is a scraped fragment,
     not a summary. Fragments are never displayed and never used as meta
     descriptions; the text falls back to a complete opening sentence instead. */
  function isFragmentDesc(description) {
    if (!description) return true;
    const d = String(description).trim();
    if (!d || /(\.\.\.|…)$/.test(d)) return true;
    if (/(?:^>+\s*|\s>+\s*(?=["“>–-]))/.test(d)) return true;
    const straightQuotes = (d.match(/"/g) || []).length;
    if (straightQuotes % 2 !== 0) return true;
    const openCurly = (d.match(/“/g) || []).length;
    const closeCurly = (d.match(/”/g) || []).length;
    if (openCurly !== closeCurly) return true;
    return false;
  }

  eleventyConfig.addFilter("completeDesc", function(description) {
    if (isFragmentDesc(description)) return '';
    return smartText(String(description).trim());
  });

  eleventyConfig.addFilter("autoDescription", function(content, description) {
    if (!isFragmentDesc(description)) return smartText(String(description).trim());
    if (!content || typeof content !== 'string') return '';
    const text = content
      .replace(/<[^>]+>/g, '')
      .replace(/&quot;/g, '"')
      .replace(/&#0?39;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[#*_`~]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (text.length <= 155) return text;
    const truncated = text.substring(0, 155);
    const lastBreak = Math.max(truncated.lastIndexOf('.'), truncated.lastIndexOf('?'), truncated.lastIndexOf('!'));
    if (lastBreak > 60) return truncated.substring(0, lastBreak + 1);
    const lastSpace = truncated.lastIndexOf(' ');
    return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
  });

  function safeSlug(filePath) {
    const path = require("path");
    const name = path.basename(filePath, path.extname(filePath));
    return name
      .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036""]/g, '')
      .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035'']/g, '')
      .replace(/[''?!%]/g, '')
      .replace(/ /g, '_');
  }

  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: function(data) {
      if (data.permalink === false) return false;
      if (data.permalink) return data.permalink;
      if (data.page && data.page.inputPath) {
        const inputPath = data.page.inputPath;
        if (inputPath.includes('/essays/') && !inputPath.endsWith('index.md')) {
          return `/essays/${safeSlug(inputPath)}/`;
        }
        if (inputPath.includes('/research/') && !inputPath.endsWith('index.md')) {
          return `/research/${safeSlug(inputPath)}/`;
        }
      }
      return undefined;
    }
  });

  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_includes/assets");
  eleventyConfig.addPassthroughCopy("src/rss.xsl");

  eleventyConfig.on("eleventy.after", () => {
    require("fs").writeFileSync("docs/.nojekyll", "");
  });

  eleventyConfig.addFilter("isoDate", function (date) {
    return date ? new Date(date).toISOString() : new Date().toISOString();
  });

  eleventyConfig.addFilter("optimizeImageUrl", function (content) {
    if (typeof content !== "string") return content;
    if (!content.includes("media.licdn.com")) return content;

    return content.replace(
      /!\[([^\]]*)\]\((https:\/\/media\.licdn\.com\/[^)]+)\/shrink_800\/([^)]+)\)/g,
      "![$1]($2/shrink_800/$3)"
    );
  });

  eleventyConfig.addFilter("absoluteUrl", function (url, base) {
    try {
      return new URL(url, base).toString();
    } catch (e) {
      return base + url;
    }
  });

  eleventyConfig.addFilter("adjustedTimestamp", function (essay, allEssays) {
    const baseDate = essay.data.date ? new Date(essay.data.date) : essay.date;
    
    const dateStr = baseDate.toISOString().split('T')[0];
    const essaysOnSameDate = allEssays.filter(e => {
      const eDate = e.data.date ? new Date(e.data.date) : e.date;
      return eDate.toISOString().split('T')[0] === dateStr;
    });
    
    if (essaysOnSameDate.length === 1) {
      const noonDate = new Date(baseDate);
      noonDate.setUTCHours(12, 0, 0, 0);
      return noonDate;
    }
    
    essaysOnSameDate.sort((a, b) => {
      const aMatch = a.data.title.match(/^(\d+)/);
      const bMatch = b.data.title.match(/^(\d+)/);
      const aNum = aMatch ? parseInt(aMatch[1]) : 0;
      const bNum = bMatch ? parseInt(bMatch[1]) : 0;
      return aNum - bNum;
    });
    
    const essayIndex = essaysOnSameDate.findIndex(e => e.url === essay.url);
    
    const adjustedDate = new Date(baseDate);
    adjustedDate.setUTCHours(12, essayIndex * 15, 0, 0);
    
    return adjustedDate;
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_includes/layouts",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};