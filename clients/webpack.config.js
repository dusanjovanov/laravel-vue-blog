const dev = require("./webpack.config.dev");
const app = require("./app/webpack.config");
const dashboard = require("./dashboard/webpack.config");
const merge = require("webpack-merge");

module.exports = env => {
    if (env.development) {
        if (env.app === "app") {
            return merge(dev, app);
        } else if (env.app === "dashboard") {
            return merge(dev, dashboard);
        }
    }
    if (env.production) return {};
};
