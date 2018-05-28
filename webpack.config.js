const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','postcss-loader','sass-loader']
                })
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.[chunkhash].css'
        }),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src','index.html'),
            filename:'index.html'
        })
    ]
};

