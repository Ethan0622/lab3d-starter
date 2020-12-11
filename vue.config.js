module.exports = {
    chainWebpack: config => {
        // 规定 .glb 文件使用 url-loader 导入
        config.module
            .rule('gbb')
            .test(/\.glb$/)
            .use('url-loader')
            .loader('url-loader')
            .end()
    }
}