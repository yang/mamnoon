const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    optimization: {
    //   splitChunks: {
    //     minSize: 10000,
    //     maxSize: 250000,
    // }
  }
  },

}