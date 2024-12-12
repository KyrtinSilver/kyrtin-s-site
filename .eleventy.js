module.exports = (eleventyConfig) => {
  // Collections
  eleventyConfig.addCollection("essays", (collectionApi) => 
    collectionApi.getFilteredByGlob("src/essays/**/*.md")
  );

  // Filters
  eleventyConfig.addFilter("date", (dateObj) => {
    const date = new Date(dateObj);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  });

  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  eleventyConfig.on('eleventy.after', () => {
    require('fs').writeFileSync('docs/.nojekyll', '');
  });

  // Config
  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_includes/layouts"
    }
  };
};
  