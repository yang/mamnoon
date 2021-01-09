// vue.config.js
module.exports = {
    //...
    configureWebpack: {
      output: {
        filename: "./js/js.js"
      }
    },
    chainWebpack: config => {
      config.optimization.delete("splitChunks");
    },
    css: {
      extract: {
        filename: "/css/css.css"
      }
    }
  }