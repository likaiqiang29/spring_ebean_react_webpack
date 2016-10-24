<!-- webpack.config.js -->

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var __CTX = process.env.APP_CTX || '';

// 开发或生产环境配置
var development = process.env.NODE_ENV !== 'production';
var basedir = path.join(__dirname, 'src/main/webapp/static');

var styleFilename = development
    ? '[name].css'
    : '[name].[chunkhash].css';

var config = {
    context: basedir,
    entry: {
        main: './app/index.js'
    },
    output: {
        path:path.join(basedir, 'build'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js(x)*$/,
            include: [
                path.join(basedir, 'app')
            ],
            loader: 'babel'
        },{
            test: /\.(png|jpg)$/,
            include: [
                path.join(basedir, 'app')
            ],
            loader: 'url-loader?limit=8192'

        }, {
            test: /\.css$/,
            loader: ['styles', 'css']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        },
        '__DEV__': development
    }),
        new ExtractTextPlugin(styleFilename, {
            allChunks: true
        }),
    ],
    devtool: 'source-map'
}

module.exports = config;