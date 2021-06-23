const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const projectMain = process.env.main;
const assetsFolder = process.env.assets || './assets';
const htmlTemplate = process.env.htmltemplate || './examples/index.tmpl';

module.exports = {
    mode: 'development',
    entry: {
        app: [
            '@babel/polyfill',
            projectMain
        ]
    },
    devtool: 'cheap-source-map',
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, 'watch-dist'),
        publicPath: './watch-dist/',
        library: '[name]',
        libraryTarget: 'umd',
        filename: '[name].js'
    },
    watch: true,
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            WEBGL_RENDERER: true, // I did this to make webpack work, but I'm not really sure it should always be true
            CANVAS_RENDERER: true // I did this to make webpack work, but I'm not really sure it should always be true
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: htmlTemplate,
            chunks: ['app'],
            chunksSortMode: 'manual',
            minify: {
                removeAttributeQuotes: false,
                collapseWhitespace: false,
                html5: false,
                minifyCSS: false,
                minifyJS: false,
                minifyURLs: false,
                removeComments: false,
                removeEmptyAttributes: false
            },
            hash: false
        }),
        new BrowserSyncPlugin({
            host: process.env.IP || 'localhost',
            port: process.env.PORT || 3000,
            server: {
                baseDir: './',
                routes: {
                    '/assets': assetsFolder,
                }
            },
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['babel-loader', 'awesome-typescript-loader'],
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /phaser-split\.js$/,
                use: ['expose-loader?Phaser']
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: 'raw-loader'
            }
        ]
    },
    node: {
        fs: 'empty'
    }
}