import { Facebook, Instagram, TikTok, Youtube } from "@/icons"
import Image from "next/image"

const SectionFooter = ():JSX.Element => {

    return<>
        <footer className="w-screen h-[800px] bg-black">

                <div className="container-logo  w-[100%] h-[70%]  flex items-center justify-center">
                    <div className="relative logo mt-[400px] w-[90%]  md:w-[600px]">

                        <div className="relative  container-simbolo w-[100%] flex justify-center">
                            <Image
                                className="w-[180px] top-[-210px] absolute"
                                src="https://cms.glowingphoenix.co/glowing-banda/assets/kzkjzor7vtw4kwso"
                                alt="Picture of the author"
                                width={200}
                                height={100}
                            />
                        </div>

                        <Image
                            className=""
                            src="https://cms.glowingphoenix.co/glowing-banda/assets/83atrnn7mgowkc8k"
                            alt="Picture of the author"
                            width={600}
                            height={400}
                        />
                        <div className="flex items-center justify-around redes w-[100%] h-[30px] absolute top-[150px] md:top-[260px]">
                            <span>
                                <Instagram/>
                            </span>
                            <span>
                                <Facebook/>
                            </span>
                            <span>
                                <TikTok/>
                            </span>
                            <span>
                                <Youtube/>
                            </span>

                        </div>
                        <div className="flex items-center justify-around text-[14px] md:text-[15px] text-white legal w-[100%] h-[30px] absolute  top-[190px] md:top-[300px]">
                            <div>Términos y condiciones</div>
                            <div>Colaboraciones</div>

                        </div>
                        <div className="flex items-center justify-around text-[14px] md:text-[15px] text-white  aipus w-[100%] h-[30px] absolute top-[230px] md:top-[340px]">
                            Desarrollado con 💟 por www.aipus.co

                        </div>
                    </div>
                </div>
        </footer>
    
    </>
}

export default SectionFooter