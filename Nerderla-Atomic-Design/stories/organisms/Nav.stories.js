import React from 'react';

import { Nav } from '../../components/organisms';

const navItems = [
    {
        icon: 'home',
        href: '/',
    },
    {
        icon: 'movie',
        href: '/',
    },
    {
        icon: 'tv',
        href: '/',
    },
    {
        icon: 'star-stroke',
        href: '/',
    },
];

export default {
    component: Nav,
    title: 'organisms/Nav',
};

const Template = (args) => <Nav {...args} navItems={navItems} />;

export const Default = Template.bind({
    navItems,
});
Default.args = Nav.defaultProps;
