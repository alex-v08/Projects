import React from 'react';

import Lead from '../../components/atoms/Lead';

export default {
    component: Lead,
    title: 'atoms/Lead',
};

const Template = (args) => <Lead {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Lorem ipsum',
};
