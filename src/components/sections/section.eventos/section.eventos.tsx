import CardEvento from "@/components/cards/card.evento/card.evento";
import Image from "next/image";

const SectionEventos = ():JSX.Element => {

    return<>
        <section  id="Eventos" className="w-screen h-[700px] md:h-[800px] bg-[#000000] p-4">

            <div className="container-title w-[100%] h-[200px] md:h-[70px] flex items-center justify-start md:ml-[5%]">
                <h1 className="relative md:mr-[50px] text-[#ff3d00] text-[28px]   md:text-[50px]  md:mt-[30px] md:mb-[20px] mb-[120px]">
                    PRÓXIMOS EVENTOS ...
                    <span className="text-white absolute text-[18px] left-[1px] top-[42px] md:top-[56px]">Disfruta de los mejores eventos en vivo <br/> ¡No te pierdas la oportunidad de unirte a la fiesta!</span> 
                </h1>
            </div>

            <div className="container-img overflow-y-hidden flex items-center justify-start w-[100%] h-[400px] md:h-[590px] md:w-[90%] md:mt-[60px] md:ml-[5%] overflow-x-scroll">

                <CardEvento src="https://cms.glowingphoenix.co/glowing-banda/assets/e1oy19zlufk8ogss" 
                    fecha="Por confirmar fecha"
                />
            



            </div>
            
           
        </section>
    </>
}

export default SectionEventos;