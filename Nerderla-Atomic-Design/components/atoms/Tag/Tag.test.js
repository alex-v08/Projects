import React from 'react';
import { render } from '@testing-library/react';
import Tag from './Tag';

test('Tag render', () => {
    const { asFragment } = render(<Tag title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
