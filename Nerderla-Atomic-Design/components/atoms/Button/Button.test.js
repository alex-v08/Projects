import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('Button render', () => {
    const { asFragment } = render(<Button title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
