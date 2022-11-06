import React from 'react';
import { render } from '@testing-library/react';
import MoviesGallery from './MoviesGallery';

test('MoviesGallery render', () => {
    const { asFragment } = render(<MoviesGallery title="example" />);
    expect(asFragment()).toMatchSnapshot();
});
