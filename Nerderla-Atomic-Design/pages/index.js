import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { FeaturedMovies, MoviesGallery } from '../components/organisms';
import { SubTitle, Icon } from '../components/atoms';
import { Nav } from '../components/organisms';
import { getMovies } from '../core/api';

export default function Home({ movies }) {
    const navItems = [
        {
            icon: 'home',
            href: '/',
        },
        {
            icon: 'movie',
            href: '/',
        },
        {
            icon: 'tv',
            href: '/',
        },
        {
            icon: 'star-stroke',
            href: '/',
        },
    ];
    return (
        <div className={styles.container}>
            <Head>
                <title>Movie App</title>
                <meta name="description" content="Example App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav navItems={navItems} />
                <FeaturedMovies
                    movies={movies.filter((movie) => movie.fields.featured)}
                />
                <div className={styles['new-releases']}>
                    <SubTitle maxLine={2}>{'New releases'}</SubTitle>
                    <Icon type={'chevron-right'} />
                </div>
                <MoviesGallery
                    movies={movies.filter((movie) => !movie.fields.featured)}
                />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const movies = await getMovies();
    return {
        props: {
            movies,
        },
    };
}
