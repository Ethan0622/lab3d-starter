module.exports = {
    chainWebpack: config => {
        // 规定 .glb 文件使用 url-loader 导入
        config.module
            .rule('glb')
            .test(/\.glb$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 0, 
                outputPath:'assets/'
            })
            .end()
    }
}