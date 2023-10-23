import CardEvento from "@/components/cards/card.evento/card.evento";
import Image from "next/image";

const SectionEventos = ():JSX.Element => {

    return<>
        <section  id="Eventos" className="w-screen h-[600px] md:h-[800px] bg-[#000000] p-4">

            <div className="container-title w-[100%] h-[70px] flex items-center justify-start md:justify-end  mb-20">
                <h1 className="relative md:mr-[50px] text-[#ff3d00] text-[28px]   md:text-[50px]  mt-[30px]">
                    PRÓXIMOS ENVENTOS ...
                    <span className="text-white absolute text-[18px] left-[1px] top-[42px] md:top-[56px]">¡Disfruta de los mejores eventos en vivo!</span> 
                </h1>
            </div>

            <div className="container-img overflow-y-hidden flex items-center justify-start w-[100%] h-[400px] md:h-[590px] md:w-[90%] md:ml-[5%] overflow-x-scroll">

                <CardEvento src="https://cms.glowingphoenix.co/glowing-banda/assets/sbtpkb9cj4gcwk44" 
                    fecha="27 de Ocutbre del 2023"
                />
                
                <CardEvento src="https://cms.glowingphoenix.co/glowing-banda/assets/o3tpu8pcoesssc4s" 
                    fecha="3 de Noviembre del 2023"
                />



            </div>
            
           
        </section>
    </>
}

export default SectionEventos;