module.exports = {
    entry: {
        '../../../var/www/products/AL/js/bundle':'./AL/browser/index.js',
        '../../../var/www/products/LA/js/bundle':'./LA/browser/index.js',
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }

        ]
    }
}