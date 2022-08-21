const path = require("path");

module.exports = {
    entry: "./basicVoiceCall.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        compress: true,
        port: 9000,
    },
};