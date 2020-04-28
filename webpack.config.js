module.exports = {
    entry: __dirname+'/public/c.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    // devtool: 'eval-source-map',
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true
    }
}