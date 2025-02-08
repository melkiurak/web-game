import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
export default (env: any) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development', 
        entry: path.resolve(__dirname, './src/index.tsx'),
        devServer:{
            static: path.join(__dirname, './dist'),
            compress: true,
            port: 9000,
            open: true,
        },
        optimization:{
            minimize: true,
            minimizer:[
            ],
        },
        plugins:[
            new MiniCssExtractPlugin({filename: 'styles.css'}),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './public/index.html'),
                minify: {
                    collapseWhitespace: true,
                    minifyCSS: true,
                },
                preload:[
                    'styles.css',
                ],
            }),
            new CssMinimizerPlugin(),
        ],
        module:{
            rules:[
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.scss$/,
                    use: [
                      MiniCssExtractPlugin.loader, 
                      'css-loader', 
                      'sass-loader',
                    ]
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
            ],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },

    };
    return config;
}
    