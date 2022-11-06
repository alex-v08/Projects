import React from 'react';

import NavItem from '../../components/molecules/NavItem';

export default {
    component: NavItem,
    title: 'molecules/NavItem',
};

const Template = (args) => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: 'home',
    href: '#',
};
