const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    //占位符
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    // limit: 2048
                }
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2, //通过引入得到的css同样需要通过下边两个loader
                        modules: true //开启css模块化打包
                    }
                }, 
                'sass-loader',
                'postcss-loader'
            ]
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}