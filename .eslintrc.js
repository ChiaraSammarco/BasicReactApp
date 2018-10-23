module.exports = {
	env: {
   browser: true,
   es6: true
   },
    globals: {
        process: true
    },
    extends: ["airbnb-base", "plugin:react/recommended"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: ["error", "always"],
        indent: ["error", "tab", { "SwitchCase": 1 }],
        quotes: ["error", "single"],
        "no-tabs": 0,
        "no-process-env": "off",
        "linebreak-style": ["error", "unix"],
        "consistent-return": 0,
        "no-plusplus": 0,
        "prefer-destructuring": ["error", { array: false, object: true }],
        "array-callback-return": 0,
        "import/prefer-default-export": 0,
        "max-len": ["error", 120,	2, {
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true
        }],
    }
};
