import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';

test('Nav render', () => {
    const { asFragment } = render(<Nav title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
