const path = require('path');

module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config, { configType }) => {
        const scssConfigIndex = config.module.rules.findIndex((c) =>
            '.scss'.match(c.test)
        );
        if (scssConfigIndex > 0 && config.module.rules[scssConfigIndex]?.oneOf)
            config.module.rules[scssConfigIndex].oneOf.push({
                test: /\module.(css|s(a|c)ss)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData:
                                '@import "styles/styles.scss";@import "styles/globals.scss";',
                        },
                    },
                ],
                include: [
                    path.resolve(__dirname, '../components'),
                    path.resolve(__dirname, '../styles'),
                ],
            });
        else {
            config.module.rules.push({
                test: /\module.(css|s(a|c)ss)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData:
                                '@import "styles/styles.scss";@import "styles/globals.scss";',
                        },
                    },
                ],
                include: [
                    path.resolve(__dirname, '../components'),
                    path.resolve(__dirname, '../styles'),
                ],
            });
        }

        return config;
    },
};
