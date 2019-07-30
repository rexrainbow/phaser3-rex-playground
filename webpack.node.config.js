const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');


const projectName = process.env.myprojname;
const projectMain = process.env.main;
const distFolder = path.resolve(__dirname, 'app/' + projectName);

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        index: [
            '@babel/polyfill',
            projectMain
        ]
    },
    devtool: 'cheap-source-map',
    output: {
        path: distFolder,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    externals: [nodeExternals()],
    watch: true,
    plugins: [
        new NodemonPlugin({
            // verbose: true,
            // watch: distFolder,
            // script: path.resolve(distFolder, 'index.js')
        }),
        new webpack.BannerPlugin({
            raw: true,
            banner: 'require("source-map-support").install();'
        })
    ],
}