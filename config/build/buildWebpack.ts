import * as webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildPlugins } from './buildPlugins';
import { buildLoader } from './buildLoader';
import { buildResolve } from './buildResolve';
import { BuildOptions } from './types/types';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildWebpack(options:BuildOptions):webpack.Configuration {
    const {mode, paths} = options;
    const isDev = mode === 'development';


    return{
            mode: mode ?? 'development', 
            entry: paths.entry,
            devServer: buildDevServer(options),
            optimization:{
                minimize: true,
                runtimeChunk: 'single',
            },
            plugins:buildPlugins(options),
            module:{
                rules: buildLoader(options),
            },
            output: {
                path: paths.output,
                filename: '[name].[contenthash].js',
                assetModuleFilename: 'assets/images/[name][ext][query]',
                clean: true,
            },
            devtool: isDev && 'inline-source-map',
            resolve: isDev ? buildResolve(options) : undefined,
        
    }
}