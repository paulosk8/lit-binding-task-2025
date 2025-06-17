import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
  mode: 'development',
  entry: './src/CamposComponent.js', //Este es el cambio importante
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
