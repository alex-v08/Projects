import { createClient } from 'contentful';
import { CONTENT_TYPES } from '../constants';

const getClient = () => {
    let params = {
        space: process.env.NEXT_PUBLIC_CF_SPACE_ID,
        environment: process.env.NEXT_PUBLIC_CF_ENV || 'master',
        accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN,
        host: 'cdn.contentful.com',
    };

    const client = createClient(params);
    return client;
};

export const getMovies = async () => {
    const query = {
        content_type: CONTENT_TYPES['MOVIE'],
    };
    const client = getClient();
    const { items } = await client.getEntries(query);
    return items;
};
