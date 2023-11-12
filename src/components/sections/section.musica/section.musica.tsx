import CardSong from "@/components/cards/card.song/card.song"
import Image from "next/image"

const SectionMusica = ():JSX.Element => {

    return<>
        <section  id="Música" className="w-screen h-[1200px] md:h-screen  bg-black flex flex-wrap items-center justify-center">
            <div className="container-caratula w-[100%] h-[45%] md:h-[95%] md:w-[46%] md:ml-1 md:mr-1">
                <div className="title mt-6 p-2">
                    <h1 className="relative w-[100%] text-[50px] text-white stroke-black">
                        <span className="absolute top-[-10px] text-[20px] text-[#FF3D00]">ÁLBUM EN PROCESO...</span>
                        INNER DESIRE
                    </h1>
                </div>
                <div className="relative container-img w-[100%] h-[70%] md:h-[80%] flex items-center justify-center">
                    <Image
                        loading="lazy"
                        src="https://cms.glowingphoenix.co/glowing-banda/assets/mqmd6ecvsa8s48g4"
                        alt="Logo Glowing Phoenix"
                        fill={true}
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="relative container-canciones w-[100%] h-[54%] md:h-[95%] md:w-[46%] md:ml-1 md:mr-1">
                <div className="title w-[100%] text-[32px] text-[#ff3d00] mt-2 md:mt-6 flex justify-center items-center">
                    <h2>SOBRE INNER DESIRE</h2>
                </div>
                <div className="text-inner text-white md:w-[100%] md:ml-0 w-[90%] ml-[5%] text-[18px] md:text-[20px] text-center p-2">
                    <p>
                        Inner Desire es un álbum en proceso de grabación, que cuenta con 7 hits musicales.
                        Sus letras abordan temas tales como la libertad y la búsqueda 
                        constante de cumplir sueños y metas.
                    </p>
                </div>
                <div className=" absolute bottom-[30px]  canciones w-[100%]">
                    <div className="title-canciones text-white text-[18px] md:text-[20px] p-2">
                        Canciones del álbum
                    </div>
                    <div className="contenedor-songs w-[100%] flex overflow-x-scroll p-2">
                        <CardSong title="My Own Demon"
                            url="https://cms.glowingphoenix.co/glowing-banda/assets/8zt2jqi5g288swsg"
                        />
                        <CardSong title="Following Dreams"
                            url="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                        />
                        <CardSong title="Supremacy"
                            url="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                        />
                        <CardSong title="Conspiracy"
                            url="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                        />
                        <CardSong title="Silence"
                            url="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                        />
                        <CardSong title="In my Mind"
                            url="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                        />
                        <CardSong title="Behaving the Madness"
                            url="https://cms.glowingphoenix.co/glowing-banda/assets/rozisvb6hxwo4ks8"
                        />

                    </div>
                </div>
            </div>
        </section>
    </>
}

export default SectionMusica