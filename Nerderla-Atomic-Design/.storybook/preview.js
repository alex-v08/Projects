import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
    configurable: true,
    value: (props) => {
        const { width, height } = props;
        const ratio = (height / width) * 100;
        return (
            <div
                style={{
                    paddingBottom: `${ratio}%`,
                }}
            >
                <img
                    style={{
                        objectFit: 'cover',
                        minWidth: '100%',
                        minHeight: '100%',
                        maxWidth: '100%',
                        maxHeight: '100%',
                    }}
                    {...props}
                />
            </div>
        );
    },
});

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};
