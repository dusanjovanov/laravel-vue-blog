const path = require("path");

/**
 * @type {import('webpack').WebpackOptions}
 */
const config = {
    entry: path.resolve(__dirname, "src/index.js"),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public")
    }
};

module.exports = config;
