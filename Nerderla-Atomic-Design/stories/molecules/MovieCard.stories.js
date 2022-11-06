import React from 'react';

import MovieCard from '../../components/molecules/MovieCard';

export default {
    component: MovieCard,
    title: 'molecules/MovieCard',
};

const Template = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Thunder Force',
    tag: [
        {
            sys: {
                type: 'Link',
                linkType: 'Tag',
                id: 'action',
            },
        },
        {
            sys: {
                type: 'Link',
                linkType: 'Tag',
                id: 'adventure',
            },
        },
    ],
    rate: '5',
    image: {
        metadata: {
            tags: [],
        },
        sys: {
            space: {
                sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: '23xucc9izuso',
                },
            },
            id: '3d24f2ifYhIipiWSUuAelZ',
            type: 'Asset',
            createdAt: '2022-10-17T15:32:47.866Z',
            updatedAt: '2022-10-17T15:32:47.866Z',
            environment: {
                sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                },
            },
            revision: 1,
            locale: 'en-US',
        },
        fields: {
            title: 'Thunder Force',
            description: '',
            file: {
                url: '//images.ctfassets.net/23xucc9izuso/3d24f2ifYhIipiWSUuAelZ/9507f2942b7619f78994e0c2c786037c/AAAABcUp5jtc4Jan0FA0vlcps8RZ7KuDAPhrNAUNGqMUQTa-IlImYWdcqSc4yqIc00BPOCQF_0ATq7tbOyE2rAf7s7TvYpuHzGSw-lTr.jpg',
                details: {
                    size: 622240,
                    image: {
                        width: 2048,
                        height: 1152,
                    },
                },
                fileName:
                    'AAAABcUp5jtc4Jan0FA0vlcps8RZ7KuDAPhrNAUNGqMUQTa-IlImYWdcqSc4yqIc00BPOCQF_0ATq7tbOyE2rAf7s7TvYpuHzGSw-lTr.jpg',
                contentType: 'image/jpeg',
            },
        },
    },
};
