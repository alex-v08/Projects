import dynamic from 'next/dynamic';

export const FeaturedMovies = dynamic(() => import('./FeaturedMovies'), {
    ssr: false,
});
export const MoviesGallery = dynamic(() => import('./MoviesGallery'), {
    ssr: false,
});
export const Nav = dynamic(() => import('./Nav'), {
    ssr: false,
});
