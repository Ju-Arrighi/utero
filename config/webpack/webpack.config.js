const path    = require("path")
const webpack = require("webpack")
// Make the following changes in webpack.config.js
  const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
  module: {
    rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
         // in webpack.config.js, add
        {
          test: /\.(png|jpe?g|gif|eot|woff2|woff|ttf|svg)$/i,
          use: 'file-loader',
        },
    ],
  },
  mode,
    optimization: {
    moduleIds: 'hashed',
  },
  entry: {
    application: "./app/javascript/application.js"
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, '..', '..', 'app/assets/builds')
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
}
// Extracts CSS into .css file
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Removes exported JavaScript files from CSS-only entries
// in this example, entry.custom will create a corresponding empty custom.js file
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  // entry: {
  //   // add your css or sass entries
  //   application: [
  //     './app/assets/javascripts/application.js',
  //     './app/assets/stylesheets/application.scss',
  //   ],
  //   custom: './app/assets/stylesheets/custom.scss',
  // },
  module: {
    rules: [
      // Add CSS/SASS/SCSS rule with loaders
      {
        test: /\.(?:sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    // Add additional file types
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {
      'src': false,
      './src': false,
    },
  },
  plugins: [
    // Include plugins
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           "css-loader",
//           // Compiles Sass to CSS
//           "sass-loader",
//         ],
//       },
//     ],
//   },
// };
