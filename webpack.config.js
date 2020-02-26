const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// on récupère la valeur de NODE_ENV
const env = process.env.NODE_ENV;

module.exports = {
  mode: env || 'development', // on définit le mode en fonction de la valeur de NODE_ENV
	output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.sc|ass$/,
        use: [
          { 
            loader: MiniCssExtractPlugin.loader 
          },
          { 
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },          
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                ctx: {
                  cssnano: {},
                  autoprefixer: {}
                }
              }
            }
          },
          {
            loader: 'resolve-url-loader' // améliore la résolution des chemins relatifs 
            // (utile par exemple quand une librairie tierce fait référence à des images ou des fonts situés dans son propre dossier)
          },
          { 
            loader: "sass-loader",
            options: {
              sourceMap: true // il est indispensable d'activer les sourcemaps pour que postcss fonctionne correctement
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {name:'images/[name].[ext]?[contenthash]'}
        },
          { loader: 'image-webpack-loader'},
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin('dist/*.*', {} ),
    new HtmlWebpackPlugin({
      //https://github.com/jantimon/html-webpack-plugin
      inject: true,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      title: 'Welcome',
      meta: {
        'theme-color': 'blue'
      },
      favicon: 'icone.png'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './src/contact.html',
      filename: 'contact.html',
      favicon: 'icone.png'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './src/beers.html',
      filename: 'beers.html',
      favicon: 'icone.png'
    })
  ]
};