const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './client/index.tsx',
    mode: 'development',
    output: {
        filename: 'client.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
    })],
    devServer: {
        contentBase: 'public',
        port: 3000,
    },
};
