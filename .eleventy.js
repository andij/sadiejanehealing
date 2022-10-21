module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/styles.css");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};
