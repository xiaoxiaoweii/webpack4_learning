const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    entry: {
        main: './src/index.js',
    },
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
                       // modules: true //开启css模块化打包
                    }
                }, 
                'sass-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.(eot|svg|ttf|woff)$/,
            use: {
                loader: 'file-loader'
            }
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader",
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), 
        new CleanWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: false
            }
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    }
}