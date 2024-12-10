import dynamic from 'next/dynamic';

export const DynamicVimeoHome = dynamic(
  () => import('./video-home').then((mod) => mod.VimeoVideo),
  {
    loading: () => <div>cargando...</div>,
    ssr: true,
    loadableGenerated: {
      webpack: () => [require.resolve('./video-home.tsx')],
    },
  }
);