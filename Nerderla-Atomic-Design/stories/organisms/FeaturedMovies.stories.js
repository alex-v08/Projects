import React from 'react';

import FeaturedMovies from '../../components/organisms/FeaturedMovies';

export default {
    component: FeaturedMovies,
    title: 'organisms/FeaturedMovies',
    parameters: {
        layout: 'fullscreen',
    },
};
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

import styles from '../../styles/Home.module.scss';

const data = [
    {
        metadata: {
            tags: [
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
        },
        sys: {
            space: {
                sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: '23xucc9izuso',
                },
            },
            id: '10Wa7IhDPpg4m2p7YHC9AI',
            type: 'Entry',
            createdAt: '2022-10-17T15:02:14.366Z',
            updatedAt: '2022-10-17T15:15:59.247Z',
            environment: {
                sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                },
            },
            revision: 2,
            contentType: {
                sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'movie',
                },
            },
            locale: 'en-US',
        },
        fields: {
            title: "Zack Snyder's Justice League",
            lead: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
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
            featured: true,
        },
    },
    {
        metadata: {
            tags: [
                {
                    sys: {
                        type: 'Link',
                        linkType: 'Tag',
                        id: 'adventure',
                    },
                },
            ],
        },
        sys: {
            space: {
                sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: '23xucc9izuso',
                },
            },
            id: '6WfYyViCBBssbBprK2UcWt',
            type: 'Entry',
            createdAt: '2022-10-17T15:09:10.191Z',
            updatedAt: '2022-10-17T15:09:14.456Z',
            environment: {
                sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                },
            },
            revision: 2,
            contentType: {
                sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'movie',
                },
            },
            locale: 'en-US',
        },
        fields: {
            title: 'Godzilla vs. Kong',
            lead: 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
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
                    id: '6FkXAMqkxUdTSBzUrieJYC',
                    type: 'Asset',
                    createdAt: '2022-10-17T13:31:48.890Z',
                    updatedAt: '2022-10-17T13:31:48.890Z',
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
                    title: 'Godzilla vs. Kong',
                    description: '',
                    file: {
                        url: '//images.ctfassets.net/23xucc9izuso/6FkXAMqkxUdTSBzUrieJYC/860c5dece367a5c365b2f6ecb3d55c27/card-img_1.jpg',
                        details: {
                            size: 3547733,
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
            rate: '5',
            featured: true,
        },
    },
];
const Template = (args) => (
    <div className={styles.main}>
        <FeaturedMovies {...args} movies={data} />
    </div>
);

export const Default = Template.bind({});
Default.args = FeaturedMovies.defaultProps;
