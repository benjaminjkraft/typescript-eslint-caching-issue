module.exports = {
    // extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    parser: '@typescript-eslint/parser',
    plugins: ["@typescript-eslint"],
    rules: {"@typescript-eslint/no-misused-promises": "error"},
    // root: true,
}
