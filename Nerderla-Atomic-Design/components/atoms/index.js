import dynamic from 'next/dynamic';

export const Button = dynamic(() => import('./Button'), {
    ssr: false,
});
export const Icon = dynamic(() => import('./Icon'), {
    ssr: false,
});
export const Lead = dynamic(() => import('./Lead'), {
    ssr: false,
});
export const SubTitle = dynamic(() => import('./SubTitle'), {
    ssr: false,
});
export const Tag = dynamic(() => import('./Tag'), {
    ssr: false,
});
export const Title = dynamic(() => import('./Title'), {
    ssr: false,
});
