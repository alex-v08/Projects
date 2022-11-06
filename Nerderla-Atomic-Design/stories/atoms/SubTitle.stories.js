import React from 'react';

import SubTitle from '../../components/atoms/SubTitle';

export default {
    component: SubTitle,
    title: 'atoms/SubTitle',
};

const Template = (args) => <SubTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Subtitle',
};
