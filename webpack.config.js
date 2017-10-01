const path = require('path');

module.exports = {
    entry: [
        "./app/index.jsx"
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[local][hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function() {
                            return [
                                require('autoprefixer')({
                                    "browsers": [
                                        "last 6 versions",
                                        "> 1%"
                                    ]
                                })
                            ];
                        }
                    }
                }
            ]
        }, ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 1231,
        historyApiFallback: true,
        inline: true,
        open: true
    },
};