import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

test('Icon render', () => {
    const { asFragment } = render(<Icon title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
