const path = require('path')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve('./Scripts'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },{
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
        loader: 'file-loader?publicPath=/&name=fonts/[name].[ext]'
      }
    ]
  },devServer: {
  writeToDisk: true
}
};