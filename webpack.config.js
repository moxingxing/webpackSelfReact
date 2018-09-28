const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: { // 入口文件
        index: './src/index.js'
    },
    output: { // 编译后文件
        path: path.resolve(__dirname, "./dist"),
        //publicPath: "http://xxxxxx", // 正式上线的路径
        filename: "[name].[hash].js"
    },
    module: {
        rules: [{
                test: /\.less$/, // 处理less文件
                exclude: /node-modules/, // 规避掉node_modules文件
                use: ["style-loader",{ loader: 'css-loader', options: {modules: true} }, "less-loader"] // 使用的解析库
            }, {
                // test 表示测试什么文件类型 
                test: /\.css$/,
                // 使用 'style-loader','css-loader'
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        // 回滚                
                        use: 'css-loader',
                        publicPath: '../' //解决css背景图的路径问题 
                    })

            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    minimize: true
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8033,
        host: '127.0.0.1',
        hot: true
    }

}