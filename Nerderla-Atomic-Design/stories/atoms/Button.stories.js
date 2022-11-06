import React from 'react';

import Button from '../../components/atoms/Button';

export default {
    component: Button,
    label: 'atoms/Button',
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = Button.defaultProps;
