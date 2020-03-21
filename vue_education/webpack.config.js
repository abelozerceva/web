const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// const PAGES_DIR = `./src/pug/`;
// const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
          test: /\.pug$/,
          oneOf: [{
              resourceQuery: /^\?vue/,
              use: ["pug-plain-loader"]
          }, 
          {
              use: [
                  // "html-loader", 
                  "pug-loader"
              ]
          }]      
      },
      {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            }, {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ]
      },
      {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.woff2$/,
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // scss: 'vue-style-loader!css-loader!sass-loader',
            // pug: 'pug-plain-loader',
          }
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    // ...PAGES.map(page => new HtmlWebpackPlugin({
    //     template: `${PAGES_DIR}/${page}`,
    //     filename: `./${page.replace(/\.pug/,'.html')}`
    // })),
    new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.pug',
        filename: 'index.html'
    }),
    new HtmlWebpackPugPlugin({adjustIndent: true}),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
};