const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://apistore.baidu.com', // 后端接口的域名
    //             ws: true,
    //             changeOrigin: true
    //         }
    //     }
    // }
})
