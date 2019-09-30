const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const rootPath = path.resolve(__dirname);

/**
 * @type {import('webpack').WebpackOptions}
 */
const config = {
    mode: "development",
    entry: {
        polyfill: "@babel/polyfill"
    },
    output: {
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: 3000,
        publicPath: "/",
        stats: {
            normal: true
        }
    },
    devtool: "cheap-module-eval-source-map",
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            vue$: "vue/dist/vue.runtime.js"
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
                include: [rootPath]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: [rootPath]
            },
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"],
                include: [rootPath]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: path.resolve(rootPath, "index.html")
        }),
        // new webpack.EnvironmentPlugin(environment),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin()
    ],
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all"
        }
    }
};

module.exports = config;
