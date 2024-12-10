'use client';
import Image from 'next/image';
import React, { useState, useEffect, Suspense } from 'react';

interface VimeoVideoProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}
const validateVideoId = (videoId: string): boolean => {
  const vimeoIdRegex = /^\d+$/;
  return vimeoIdRegex.test(videoId);
};

export const VideoSrc: React.FC<VimeoVideoProps> = ({
  videoId,
  autoplay = true,
  loop = true,
  muted = true,
}) => {
  const [src, setSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!validateVideoId(videoId)) {
      setError('ID de video inválido');
      return;
    }

    const videoSrc = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=${
      autoplay ? 1 : 0
    }&loop=${loop ? 1 : 0}&byline=0&title=0&muted=${muted ? 1 : 0}`;
    setSrc(videoSrc);
  }, [videoId, autoplay, loop, muted]);

  return (
    <Suspense
      fallback={
        <Image
          src='/preload.png'
          alt='loading video'
          // priority={true}
          loading='lazy'
          quality={100}
          width={1920}
          height={1000}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      }
    >
      <iframe
        src={src!}
        className='w-full h-full'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
        title='Vimeo Video'
        loading='lazy'
      ></iframe>
    </Suspense>
  );
};

