import {VideoSrc} from './video-src';
import dynamic from 'next/dynamic';

export const VimeoVideo: React.FC = () => {
  const videoConfig = {
    videoId: '386224073',
    autoplay: true,
    loop: true,
    muted: true,
    fallbackImage: '/preload.png',
  };

  return (
    <section
      id='video'
      className='bg-black  relative'
      aria-label='Video promocional'
    >
      <div className='aspect-video w-full'>
        <VideoSrc {...videoConfig} />
      </div>
    </section>
  );
};