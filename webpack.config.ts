import {Configuration} from "webpack";

const path = require('path');

interface DevServerConfiguration {
    devServer: any,
}

const config: Configuration | DevServerConfiguration = {
    entry: {
        textarea_autosize_blink: './src/client/textarea_autosize_blink',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/client'),
        publicPath: "/client",
    },
    devServer: {
        port: 3001,
        contentBase: "./dist",
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-bootstrap': 'ReactBootstrap',
    },
}

export default config;
