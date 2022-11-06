import React from 'react';
import { render } from '@testing-library/react';
import Component from './Component';

test('Component render', () => {
    const { asFragment } = render(<Component title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
