import React from 'react';

import Title from '../../components/atoms/Title';

export default {
    component: Title,
    title: 'atoms/Title',
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Title',
};
