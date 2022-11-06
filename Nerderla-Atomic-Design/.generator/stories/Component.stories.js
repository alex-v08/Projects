import React from 'react';

import Component from '../../components/ComponentType/Component';

export default {
    component: Component,
    title: 'ComponentType/Component',
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = Component.defaultProps;
