import React from 'react';

import Tag from '../../components/atoms/Tag';

export default {
    component: Tag,
    title: 'atoms/Tag',
    parameters: {
        layout: 'centered',
    },
};
const wrapperStyle = {
    background: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
};

const Template = (args) => (
    <div style={wrapperStyle}>
        <Tag {...args} />
    </div>
);
export const Default = Template.bind({});
Default.args = Tag.defaultProps;
