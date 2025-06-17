import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export default {
  entry: './src/index.js',   
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    clean: true,
  },
  mode: 'development',
  devServer: {
    static: './dist',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
