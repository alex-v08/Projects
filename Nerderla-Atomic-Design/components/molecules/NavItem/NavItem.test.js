import React from 'react';
import { render } from '@testing-library/react';
import NavItem from './NavItem';

test('NavItem render', () => {
    const { asFragment } = render(<NavItem title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
