# BasicReactApp

For steps explanation, go to: https://bitbucket.org/lavoro/reactstartingcode/src/master/

Thanks to: https://www.valentinog.com/blog/react-webpack-babel/

## 1. WebPack, React, Babel

### In console

```
npm i -g webpack --save-dev
npm i -g webpack-cli --save-dev
npm i -g webpack-dev-server --save-dev
npm i babel-loader@7 babel-core babel-preset-env babel-preset-react --save-dev
npm i react react-dom --save-dev
npm i html-webpack-plugin html-loader --save-dev
```

### In package.json

```
"scripts": {
  "build": "webpack --mode production",
  "start": "webpack-dev-server --open --mode development"
}
```

### In .babelrc
```
{
  "presets": ["env", "react"]
}
```

### In webpack.config.js
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

## 2. Eslint

### In console

```
npm i -g eslint --save-dev
npm i -g eslint-config-airbnb-base --save-dev
npm i -g eslint-loader --save-dev
npm i eslint-plugin-import --save-dev
npm i eslint-plugin-node --save-dev
npm i eslint-plugin-react --save-dev

npm i husky
npm i lint-staged
```
