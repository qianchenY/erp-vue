const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import '~@/assets/css/public.scss';`
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  devServer: {
      proxy: {
          "/api": {
              target: "https://api.warframestat.us", // 需要跨域的目标url，我这里用到的是豆瓣API
              changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
              ws: true,
              source: true,
              pathRewrite: {
                  "^/api": ''
              }
          }
      }
  }
})
