const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/views/index.pug',
            data: {
                title: 'Página inicio',
                description: 'descripcion test'
            }
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'about/index.html',
        //     template: './src/views/about.pug',
        //     data: {
        //         title: 'Página about',
        //         description: 'descripcion test'
        //     }
        // }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].min.css',
        }),

    ]
}