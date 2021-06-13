const { mode } = require("webpack-nano/argv")
const { MiniHtmlWebpackPlugin } =  require("mini-html-webpack-plugin")
const { WebpackPluginServe } = require("webpack-plugin-serve")
const { VueLoaderPlugin } = require("vue-loader")
const { VuetifyLoaderPlugin } = require("vuetify-loader")
const sass = require("sass")

module.exports = {
    watch: mode == "development",
    entry: ["./src", "webpack-plugin-serve/client"],
    mode,
    resolve: {
        extensions: ["*", ".js", ".vue", ".json"]
    },
    plugins: [
        new MiniHtmlWebpackPlugin({ context: { title: "Vuetify Scaffold" } }),
        new WebpackPluginServe({
                               port: process.env.PORT || 8080,
                               static: "./dist",
                               liveReload: true,
                               waitForBuild: true,
        }),
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /.vue$/,
                exclude: /node-modules/,
                loader: "vue-loader",
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: sass,
                            sassOptions: {
                                identedSyntax: true
                            },
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
            {
                enforce: "pre",
                test: /\.(js|vue)$/,
                loader: "eslint-loader",
                exclude: /node-modules/,
            },
        ],
    }
}