const htmlWebPackPlugin = require('html-webpack-plugin');
//const htmlLoader        = require('html-loader');
const copyWebpackPlugin = require('copy-webpack-plugin');
// const fs = require('fs');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader: "file-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html" // output is defined in the dist folder
        }),
        new copyWebpackPlugin([{
            from: "./dataFile/data.json", to: "./data.json"
        }])
    ],
    node: {
        fs: "empty"
    },
    externals: {
        fs: require('fs')
    },
    target: "web",
   
};