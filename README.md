# BasicReactApp

For steps explanation, go to: https://bitbucket.org/lavoro/reactstartingcode/src/master/


## In console

```
npm i webpack --save-dev
npm i webpack-cli --save-dev
npm i webpack-dev-server --save-dev
npm i babel-loader babel-core babel-preset-env babel-preset-react --save-dev
npm i react react-dom --save-dev
npm i html-webpack-plugin html-loader --save-dev
```

## In package.json

```
"scripts": {
  "build": "webpack --mode production",
  "start": "webpack-dev-server --open --mode development"
}
```

## In .babelrc
```
{
  "presets": ["env", "react"]
}
```

## In webpack.config.js
```
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
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
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};
```
