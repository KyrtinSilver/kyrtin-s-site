const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addGlobalData("now", new Date());

  eleventyConfig.addCollection("essays", function (collection) {
    return collection
      .getFilteredByGlob("src/essays/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => {
        // Convert front-matter date to Date objects (fallback to Eleventy’s built-in file date).
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

  eleventyConfig.addCollection("research", function (collection) {
    return collection
      .getFilteredByGlob("src/research/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"));
  });

  // === Filters, passthrough copies, etc. ===

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