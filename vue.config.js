module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: 
        `@import "./src/assets/sass/app.scss";\
        @import "./src/assets/sass/foundation/mixin.scss";`
      }
    }
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "Profile",
    }
  },
  publicPath: './'
};