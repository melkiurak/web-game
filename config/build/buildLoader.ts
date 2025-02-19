import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoader(options:any): ModuleOptions['rules']{
    
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const scssLoader = {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
    };
    const htmlLoader = {
        test: /\.html$/,
        use: 'html-loader'
    };
    const assetLoader = {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
    };
    return [
      tsLoader,
      htmlLoader,
      scssLoader,
      assetLoader,
    ]
}