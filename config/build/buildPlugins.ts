import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { Configuration } from 'webpack';
import {BuildOptions } from './types/types';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
export function buildPlugins({mode, paths}: BuildOptions): Configuration['plugins'] {
    return [
        new MiniCssExtractPlugin({filename: 'styles.css'}),
        new HtmlWebpackPlugin({
            template: paths.html,
            preload:['styles.css'],
        }),
        new CssMinimizerPlugin(),
        new BundleAnalyzerPlugin(),
    ]
}