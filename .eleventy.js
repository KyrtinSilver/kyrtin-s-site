module.exports = (eleventyConfig) => {
  // Essay Collections
  eleventyConfig.addCollection("essays", (collectionApi) => 
    collectionApi.getFilteredByGlob("src/essays/**/*.md")
  );

  // Research Collections
  eleventyConfig.addCollection("research", function(collection) {
    const items = collection.getFilteredByGlob("src/research/**/*.md");
    console.log("Research items:", items.map(item => ({
      url: item.url,
      inputPath: item.inputPath,
      data: {
        title: item.data.title,
        date: item.data.date
      }
    })));
    return items;
  });

  // Filters
  eleventyConfig.addFilter("date", (dateObj) => {
    // Ensure we have a valid date string
    if (!dateObj) return '';
    
    // Create date object and force UTC interpretation
    const utcDate = new Date(dateObj);
    utcDate.setUTCHours(12, 0, 0, 0);  // Force noon UTC
    
    // Check if date is valid
    if (isNaN(utcDate.getTime())) return '';
    
    // Format date in local time
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
  