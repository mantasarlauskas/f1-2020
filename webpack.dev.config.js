const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './client/dev.tsx',
    mode: 'development',
    output: {
        publicPath: '/',
        filename: 'client.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            client: path.resolve('./client'),
            server: path.resolve('./server'),
        },
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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]',
                            },
                        },
                    },
                    'less-loader',
                    {
                        loader: 'style-resources-loader',
                        options: {
                            patterns: [
                                path.resolve(__dirname, 'client/styles/fonts.less'),
                                path.resolve(__dirname, 'client/styles/spacing.less'),
                                path.resolve(__dirname, 'client/styles/breakpoints.less'),
                                path.resolve(__dirname, 'client/styles/color-map.less'),
                                path.resolve(__dirname, 'client/styles/mixins.less'),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.woff2$/,
                use: ['url-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
};
