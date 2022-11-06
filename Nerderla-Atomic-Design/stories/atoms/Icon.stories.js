import React from 'react';

import Icon from '../../components/atoms/Icon';

export default {
    component: Icon,
    title: 'atoms/Icon',
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = Icon.defaultProps;
