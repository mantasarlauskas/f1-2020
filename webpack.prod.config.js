const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const commonConfig = {
    mode: 'production',
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
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
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};

const serverConfig = {
    entry: './server/index.tsx',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        publicPath: '/',
        filename: 'server.js',
    },
    ...commonConfig,
};

const clientConfig = {
    entry: './client/index.tsx',
    target: 'web',
    output: {
        publicPath: '/',
        filename: 'client.js',
    },
    ...commonConfig,
    plugins: [
        ...commonConfig.plugins,
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
        }),
    ],
};

module.exports = [clientConfig, serverConfig];
