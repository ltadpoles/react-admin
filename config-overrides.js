const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }),
    addWebpackAlias({
        ['@']: path.resolve(__dirname, 'src')
    }),
    (config, env) => {
        config.optimization.splitChunks = {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    minSize: 30000,
                    minChunks: 1,
                    chunks: 'initial',
                    priority: 1 // 设置处理的优先级，数值越大越优先处理
                },
                commons: {
                    test: /[\\/]src[\\/]common[\\/]/,
                    name: 'commons',
                    minSize: 30000,
                    minChunks: 3,
                    chunks: 'initial',
                    priority: -1,
                    reuseExistingChunk: true // 允许使用已经存在的代码块
                }
            }
        }
        return config
    }
)
