import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from './MovieCard';

test('MovieCard render', () => {
    const { asFragment } = render(<MovieCard title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
