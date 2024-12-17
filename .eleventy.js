module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection("essays", function(collection) {
    return collection.getFilteredByGlob("src/essays/**/*.md")
      .filter(item => !item.inputPath.endsWith("index.md"));
  });

  eleventyConfig.addCollection("research", function(collection) {
    return collection.getFilteredByGlob("src/research/**/*.md")
      .filter(item => !item.inputPath.endsWith("index.md"));
  });

  eleventyConfig.addFilter("date", (dateObj) => {
    if (!dateObj) return '';
    const utcDate = new Date(dateObj);
    utcDate.setUTCHours(12, 0, 0, 0);
    if (isNaN(utcDate.getTime())) return '';
    return utcDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
  });

  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_includes/assets");

  eleventyConfig.on('eleventy.after', () => {
    require('fs').writeFileSync('docs/.nojekyll', '');
  });

  eleventyConfig.addFilter('isoDate', function(date) {
    return date ? new Date(date).toISOString() : new Date().toISOString();
  });

  eleventyConfig.addFilter('absoluteUrl', function(url, base) {
    try {
      return new URL(url, base).toString();
    } catch(e) {
      return base + url;
    }
  });

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};