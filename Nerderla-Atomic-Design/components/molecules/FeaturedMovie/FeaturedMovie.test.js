import React from 'react';
import { render } from '@testing-library/react';
import FeaturedMovie from './FeaturedMovie';

test('FeaturedMovie render', () => {
    const { asFragment } = render(<FeaturedMovie title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
