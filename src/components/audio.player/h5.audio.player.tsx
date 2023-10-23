'use client'

import { CloseTimes, CloseTimes2, MusicNote, Pause, Play } from '@/icons';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const H5AudioPlayer = () => {
  const htmlAudioRef = useRef<any>(null);

  const [duration, setDuration] = useState<string>('00:00');
  const [song, setSong] = useState<string>(process.env.NEXT_PUBLIC_DOMAIN+'/inner-desire/my-own-demon.mp3');
  const [modalRep, setModalRep] = useState<boolean>(false);

  function segundosAFormatoMinutos(segundos: number): string {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60);
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormateados =
      segundosRestantes < 10 ? `0${segundosRestantes}` : segundosRestantes;

    return `${minutosFormateados}:${segundosFormateados}`;
  }

  const RenderDuration = (duration: string) => {
    const durationElement = document.querySelector(
      '.rhap_total-time'
    ) as HTMLElement;
    durationElement.innerHTML = duration;
  };

  useEffect(() => {
    const audioElement = htmlAudioRef.current.audio.current;
    console.log(htmlAudioRef.current);
    audioElement.addEventListener('loadedmetadata', () => {
      setDuration(segundosAFormatoMinutos(audioElement.duration));
      RenderDuration(segundosAFormatoMinutos(audioElement.duration));
    });
  }, [song]);

  return<>
    <div style={modalRep ? {display:'block'} : {display:'none'}} className='rounded-[9px] z-[99999] bottom-[152px] md:bottom-[100px] fixed w-[94%] ml-[3%] md:w-[70%] md:ml-[15%] h-[75%] md:h-[80%] bg-[#090909]'>
      <div className='w-[100%] h-[45px] flex items-center justify-center text-white text-[18px] relative p-2'>
          Glowing Phoenix 
         <span onClick={()=>setModalRep(!modalRep)} className='absolute left-[90%] md:left-[96%] cursor-pointer'><CloseTimes2/></span>
      </div>

      <div className="container-reproductor flex flex-wrap md:pt-4 justify-center h-[95%]">

        <div className="container-albumes w-[100%] md:w-[45%] h-[34%] md:h-[86%] p-2">

          <div className='title-albumes w-[100%]'>
            <h3 className='text-white text-[18px]'>Álbumes</h3>
          </div>

          <div className="flex overflow-x-scroll the-albumes w-[100%] h-[81%] md:h-[340px]  md:p-2">
            <span className='min-w-[90px] md:min-w-[300px]  mr-2 ml-2' >
              <Image
                src="https://cms.glowingphoenix.co/glowing-banda/assets/g5i36l3musgkwgwk"
                alt="Álbum Inner Desire By Glowing Phoenix"
                width={300}
                height={300}
                priority={true}
                className="rounded-[10px]  mr-2 ml-2 border-2 border-white"
              />
            </span>

            <span className='min-w-[90px] md:min-w-[300px]  mr-2 ml-2'>
              <Image
                src="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                alt="Álbum Inner Desire By Glowing Phoenix"
                width={300}
                height={300}
                priority={true}
                className="rounded-[10px]  mr-2 ml-2"
              />

            </span>

            <span className='min-w-[90px] md:min-w-[300px]  mr-2 ml-2'>
              <Image
                src="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                alt="Álbum Inner Desire By Glowing Phoenix"
                width={300}
                height={300}
                priority={true}
                className="rounded-[10px]  mr-2 ml-2"
              />

            </span>

            <span className='min-w-[90px] md:min-w-[300px]  mr-2 ml-2'>
              <Image
                src="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                alt="Álbum Inner Desire By Glowing Phoenix"
                width={300}
                height={300}
                priority={true}
                className="rounded-[10px]  mr-2 ml-2"
              />

            </span>
          </div>

        </div>

        <div className="container-canciones-list w-[100%] md:w-[45%] h-[60%] md:h-[86%] mb-4 md:mb-0 p-2 md:border-l-2 md:border-white">
          <div className='title-albumes w-[100%]'>
            <h3 className='text-white text-[18px]'>Álbum Inner Desire</h3>
          </div>
          <div className="overflow-x-scroll the-songs w-[100%] h-[91%] md:h-[340px]  p-2 overflow-y-scroll">
              <div className='w-[100%] h-[60px] flex items-center justify-between bg-[#f2f2f2] rounded-[9px] p-1 mt-4 mb-4'>
                <Image
                  src="https://cms.glowingphoenix.co/glowing-banda/assets/8zt2jqi5g288swsg"
                  alt="Álbum Inner Desire By Glowing Phoenix"
                  width={50}
                  height={50}
                  priority={true}
                  className="rounded-[9px]"
                />
                <h2 className='text-black'>
                  My Own Demon
                </h2>
                <div onClick={()=>{
                 
                  if(htmlAudioRef.current.audio.current.paused){
                    htmlAudioRef.current.audio.current.play();


                  }else{

                    htmlAudioRef.current.audio.current.pause();
                  }
                }} className='w-[60px]'>
                  <span className='play-icon-demon'><Play/></span>
                  <span className='pause-icon-demon hidden'>
                    <Pause/>
                  </span>
                </div>

              </div>
              <div className='w-[100%] h-[60px] flex items-center justify-between bg-[#f2f2f2] rounded-[9px] p-1 mt-4 mb-4'>
                <Image
                  src="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                  alt="Álbum Inner Desire By Glowing Phoenix"
                  width={50}
                  height={50}
                  priority={true}
                  className="rounded-[9px]"
                />
                <h2 className='text-black'>
                  Following Dreams
                </h2>
                <div className='w-[60px]'>
                  <span className='play-icon'><Play/></span>
                  <span className='pause-icon hidden'>
                    <Pause/>
                  </span>
                </div>

              </div>
              <div className='w-[100%] h-[60px] flex items-center justify-between bg-[#f2f2f2] rounded-[9px] p-1 mt-4 mb-4'>
                <Image
                  src="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                  alt="Álbum Inner Desire By Glowing Phoenix"
                  width={50}
                  height={50}
                  priority={true}
                  className="rounded-[9px]"
                />
                <h2 className='text-black'>
                  Silence
                </h2>
                <div className='w-[60px]'>
                  <span className='play-icon'><Play/></span>
                  <span className='pause-icon hidden'>
                    <Pause/>
                  </span>
                </div>

              </div>
              <div className='w-[100%] h-[60px] flex items-center justify-between bg-[#f2f2f2] rounded-[9px] p-1 mt-4 mb-4'>
                <Image
                  src="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                  alt="Álbum Inner Desire By Glowing Phoenix"
                  width={50}
                  height={50}
                  priority={true}
                  className="rounded-[9px]"
                />
                <h2 className='text-black'>
                  Supremacy
                </h2>
                <div className='w-[60px]'>
                  <span className='play-icon'><Play/></span>
                  <span className='pause-icon hidden'>
                    <Pause/>
                  </span>
                </div>

              </div>
              <div className='w-[100%] h-[60px] flex items-center justify-between bg-[#f2f2f2] rounded-[9px] p-1 mt-4 mb-4'>
                <Image
                  src="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                  alt="Álbum Inner Desire By Glowing Phoenix"
                  width={50}
                  height={50}
                  priority={true}
                  className="rounded-[9px]"
                />
                <h2 className='text-black'>
                  Conspiracy
                </h2>
                <div className='w-[60px]'>
                  <span className='play-icon'><Play/></span>
                  <span className='pause-icon hidden'>
                    <Pause/>
                  </span>
                </div>

              </div>
              <div className='w-[100%] h-[60px] flex items-center justify-between bg-[#f2f2f2] rounded-[9px] p-1 mt-4 mb-4'>
                <Image
                  src="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                  alt="Álbum Inner Desire By Glowing Phoenix"
                  width={50}
                  height={50}
                  priority={true}
                  className="rounded-[9px]"
                />
                <h2 className='text-black'>
                 In my Mind
                </h2>
                <div className='w-[60px]'>
                  <span className='play-icon'><Play/></span>
                  <span className='pause-icon hidden'>
                    <Pause/>
                  </span>
                </div>

              </div>
              <div className='w-[100%] h-[60px] flex items-center justify-between bg-[#f2f2f2] rounded-[9px] p-1 mt-4 mb-4'>
                <Image
                  src="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                  alt="Álbum Inner Desire By Glowing Phoenix"
                  width={50}
                  height={50}
                  priority={true}
                  className="rounded-[9px]"
                />
                <h2 className='text-black'>
                  Behaving the Madness
                </h2>
                <div className='w-[60px]'>
                  <span className='play-icon'><Play/></span>
                  <span className='pause-icon hidden'>
                    <Pause/>
                  </span>
                </div>

              </div>

          </div>
        </div>

      </div>

    </div>

    <section className="w-screen flex fixed bottom-[1px]">

      <section onClick={()=>setModalRep(!modalRep)} className="album w-[25vw] hidden md:flex justify-between h-[88px] bg-[#090909] p-1 cursor-pointer">
        <div className="container-img w-[30%] h-[100%] rounded-[8px]">
          <Image
            src="https://cms.glowingphoenix.co/glowing-banda/assets/g5i36l3musgkwgwk"
            alt="Álbum Inner Desire By Glowing Phoenix"
            width={83}
            height={83}
            priority={true}
            className="rounded-[8px]"
          />
        </div>
        <div className="container-info w-[68%] h-[100%] p-1">
          <div className="info-song text-white mb-2">
            <h3 className="text-[20px] stroke-black flex items-center">
              <span className="mr-1">
                <MusicNote />{' '}
              </span>{' '}
              My Own Deamon
            </h3>
          </div>
          <div className="info-ambum text-white mt-[-4px]">
            <p className="text-[12px] stroke-black">Ábum</p>
            <h3 className="text-[18px] stroke-black">Inner Desire</h3>
          </div>
        </div>
      </section>

      <section onClick={()=>setModalRep(!modalRep)} className="album-mobile absolute top-[-61px] flex justify-start md:hidden w-[96%] right-[2%] h-[60px] bg-[#090909] rounded-[6px]">
        <div className="container-img w-[20%] h-[100%]">
          <Image
            src="https://cms.glowingphoenix.co/glowing-banda/assets/g5i36l3musgkwgwk"
            alt="Álbum Inner Desire By Glowing Phoenix"
            width={60}
            height={60}
            priority={true}
            className="rounded-[6px]"
          />
        </div>
        <div className="container-info w-[70%] h-[100%] p-1">
          <div className="info-song text-white">
            <h3 className="text-[18px] stroke-black flex items-center">
              <span className="mr-1">
                <MusicNote />{' '}
              </span>{' '}
              My Own Deamon
            </h3>
          </div>
          <div className="info-ambum text-white">
            <h3 className="text-[15px] stroke-black">Álbum Inner Desire</h3>
          </div>
        </div>
      </section>

      <section className="audioplayer w-screen md:w-[75vw]  ">
        <AudioPlayer
          ref={htmlAudioRef}
          src={song}
          onPlay={(e: any) => {
            const playIcon = document.querySelector('.play-icon-demon') as HTMLElement;
            const pauseIcon = document.querySelector('.pause-icon-demon') as HTMLElement;
             
              playIcon.classList.add('hidden');
              pauseIcon.classList.remove('hidden');

            console.log(e.target.duration);
            setDuration(segundosAFormatoMinutos(e.target.duration));
            RenderDuration(segundosAFormatoMinutos(e.target.duration));
          }}
          onPause={(e: any) => {

            const playIcon = document.querySelector('.play-icon-demon') as HTMLElement;
            const pauseIcon = document.querySelector('.pause-icon-demon') as HTMLElement;
             
              playIcon.classList.remove('hidden');
              pauseIcon.classList.add('hidden');
          }}
          
          defaultDuration={duration}
          defaultCurrentTime="00:00"
          preload="metadata"
        />
      </section>
    </section>
  </>
};

export default H5AudioPlayer;