import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

test('Title render', () => {
    const { asFragment } = render(<Title title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
