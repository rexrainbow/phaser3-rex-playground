const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

const fileName = process.env.name;
const projectMain = process.env.main;
var entry = {};
entry[fileName] = projectMain;

module.exports = {
    mode: 'production',
    entry: entry,
    output: {
        pathinfo: true,
        path: path.resolve(__dirname, './templates/dist'),
        filename: 'rex[name].min.js',
        library: {
            root: 'rex[name]'
        },
        libraryTarget: 'umd',
        umdNamedDefine: true,
        libraryExport: 'default'
    },
    performance: {
        hints: false
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            WEBGL_RENDERER: true,
            CANVAS_RENDERER: true,
            "typeof WEBGL_DEBUG": JSON.stringify(false),
        }),
    ],
    resolve: {
        alias: {
        },
    }
}