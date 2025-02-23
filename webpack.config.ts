import * as webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildPaths } from './config/build/types/types';
import path from 'path';

export default (env: any) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, './src/index.tsx'),
        html: path.resolve(__dirname, './public/index.html'),
    };

    const config: webpack.Configuration = buildWebpack({
            port: env.port ?? 3000,
            mode: env.mode ?? 'development',
            paths, 
        },
    );
    return config;
};
    