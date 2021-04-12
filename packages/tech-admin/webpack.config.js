/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    mode: 'production',

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HWP({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
    ],
};
