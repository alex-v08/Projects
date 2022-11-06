module.exports = {
    extends: ['next/core-web-vitals', 'plugin:storybook/recommended'],
    plugins: ['unused-imports'],
    rules: {
        'no-unused-vars': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        indent: [
            'error',
            4,
            {
                ignoredNodes: ['TemplateLiteral'],
            },
        ],
        '@next/next/no-img-element': [0],
    },
};
