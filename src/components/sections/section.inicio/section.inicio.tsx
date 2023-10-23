import Image from "next/image"
import ButtonSectionInicio from "./components/button";

const SectionInicio = ():JSX.Element=>{

    return<>
        <section  id="Inicio" className="relative w-screen h-screen">

            <Image
                className="hidden md:block object-cover"
                src="https://cms.glowingphoenix.co/glowing-banda/assets/jk1k4n0c7tsgw0ks"
                alt="Integrantes Banda Glowing phoenix"
                priority={true}
                quality={100}
                fill={true}
            />

            <Image
                className="block md:hidden object-cover"
                src="https://cms.glowingphoenix.co/glowing-banda/assets/46jdqtxxpvwgo88s"
                alt="Integrantes Banda Glowing phoenix"
                priority={true}
                quality={100}
                fill={true}
            />

            <div className="absolute container-logo w-screen h-[200px] top-[50%] flex items-center justify-center md:top-[40%]">
                <Image
                    src="https://cms.glowingphoenix.co/glowing-banda/assets/83atrnn7mgowkc8k"
                    alt="Glowing Phoenix Banda de Trash Metal"
                    width={660}
                    height={490}
                    priority={true}
                />
            </div>
            <div className="absolute container-proximamente w-screen h-[100px] top-[75%] flex items-center justify-center md:top-[76%]">
                <ButtonSectionInicio/>
            </div>


        </section>
    
    </>
}

export default SectionInicio;