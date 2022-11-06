import React from 'react';
import { render } from '@testing-library/react';
import Lead from './Lead';

test('Lead render', () => {
    const { asFragment } = render(<Lead title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
