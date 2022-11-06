import React from 'react';
import { render } from '@testing-library/react';
import FeaturedMovies from './FeaturedMovies';

test('FeaturedMovies render', () => {
    const { asFragment } = render(<FeaturedMovies title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
