"use client"

import Script from 'next/script';
import React, { useState, useRef, useEffect, FC } from 'react';

// Definiendo la interfaz para las props
interface LazyVideoProps {
  src: string;
}

const LazyVideo: FC<LazyVideoProps> = (props:LazyVideoProps) => {
  const [shouldLoad, setShouldLoad] = useState<boolean>(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect(); // Desconectar después de cargar
          }
        });
      },
      { threshold: 0.9 } // Se carga cuando el 90% del video está visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={videoRef}>
        {
            shouldLoad &&<>

            <iframe 
                src={props.src} 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                className='absolute md:top-[9%] top-[-9%] left-0 w-[100%] h-[90%]'
                title="Preview Following Dreams"></iframe>


                <Script
                    src="https://player.vimeo.com/api/player.js" 
                    strategy="afterInteractive" 
                />

            </>
        
        }
    </div>
  );
};

export default LazyVideo;