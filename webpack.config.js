const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//打包带着html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//自动清除无用文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.resolve(__dirname,"src/index.js"),//人口
    output: {
    path: path.resolve(__dirname, 'dist'),//打包后的文件夹的地址
    filename: 'main.js'
    },
    module: {
        rules: [
            // 解析es6
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            // 打包css
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],//从后往前走
            },
            // 打包图片。内部使用file-loader
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                    //   图片小于这个值，会被base64编码，提高效率，减少请求
                     name:'[hash:8].[ext]'//打包后文件名字取8位哈希值   
                    }
                  }
                ]
            },

            // 配置loader，处理vue文件
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/public/index.html"
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    mode:"development",

    devServer: {
        open: true, //自动打开浏览器
        port: 8080,
        quiet:true, //输出少量提示信息
    },
    devtool:"cheap-module-eval-source-map", //定位出错代码的原始代码行

    resolve: {
      extensions: ['.js', '.vue'],
      alias:{
        // 给路径起别名，导入以vue结尾的文件，默认找的是vue/dist/vue.esm.js
        'vue$':'vue/dist/vue.esm.js'
      }
    }
};