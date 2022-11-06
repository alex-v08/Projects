import React from 'react';
import { render } from '@testing-library/react';
import SubTitle from './SubTitle';

test('SubTitle render', () => {
    const { asFragment } = render(<SubTitle title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
