import React from 'react';

import FeaturedMovie from '../../components/molecules/FeaturedMovie';

export default {
    component: FeaturedMovie,
    title: 'molecules/FeaturedMovie',
};

const Template = (args) => <FeaturedMovie {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Zack Snyder's Justice League",
    lead: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
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
                id: 'fantasy',
            },
        },
    ],
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
            id: '7oSVZnBNNYtGRRucJpBDuh',
            type: 'Asset',
            createdAt: '2022-10-17T15:02:04.569Z',
            updatedAt: '2022-10-17T15:02:04.569Z',
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
            title: "Zack Snyder's Justice League",
            description: '',
            file: {
                url: '//images.ctfassets.net/23xucc9izuso/7oSVZnBNNYtGRRucJpBDuh/6099f758a1a1b28605cde3cff08579c7/card-img_1.jpg',
                details: {
                    size: 3044781,
                    image: {
                        width: 3400,
                        height: 1296,
                    },
                },
                fileName: 'card-img 1.jpg',
                contentType: 'image/jpeg',
            },
        },
    },
    rate: '3',
};
