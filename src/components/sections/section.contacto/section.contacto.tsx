import FormContacto from "@/components/forms/form.contacto"
import { Email, Facebook, Instagram, TikTok, Youtube } from "@/icons"

const SectionContacto = ():JSX.Element => {

    return<>
        <section id="Contacto" className=" w-screen h-[1340px] md:h-[860px] bg-[url('https://cms.glowingphoenix.co/glowing-banda/assets/k3ka9xhawz4sk8c0')]">
            
            <div className="relative title-galeria w-[100%] md:w-[94%] md:ml-[3%] h-[100px] p-2 md:p-4 mb-6 flex justify-start md:justify-end">
                <h1 className="text-[#ff3d00] text-[39px] md:text-[56px]">CONTACTO...</h1>
                <span className="text-white absolute top-[50px] md:top-[80px] text-[18px] md:text-[20px]">
                    Contrataciones, colaboraciones y más
                </span>
            </div>
            <div className="flex flex-wrap items-center justify-center contenido-contacto  w-[100%] md:w-[94%] md:ml-[3%] h-[700px]  p-2 text-[22px]">

                <FormContacto/>
                <div className="datos-contacto w-[100%] md:w-[46%] h-[500px] md:h-[600px]   p-2 text-white">
                    <div className="min-w-[100%] flex justify-end items-center h-[60px] mail">
                       <Email/> <h3 className="ml-2">banda@glowingphoenix.co</h3>
                    </div>
                    <div className="min-w-[100%] flex justify-end items-center h-[60px] instagram">
                        <Instagram/><h3 className="ml-2">Instagram</h3>
                    </div>
                    <div className="min-w-[100%] flex justify-end items-center h-[60px] facebook">
                        <Facebook/><h3 className="ml-2">Facebook</h3>
                    </div>
                    <div className="min-w-[100%] flex justify-end items-center h-[60px] tik-tok">
                        <TikTok/><h3 className="ml-2">Tik Tok</h3>
                    </div>
                    <div className="min-w-[100%] flex justify-end items-center h-[60px] youtube">
                        <Youtube/><h3 className="ml-2">Youtube</h3>
                    </div>
                    <div className="container-boton flex justify-end w-[100%]">
                        <button className="text-white  w-[100%] md:w-[50%] text-[20px] h-[60px] bg-[#ff3d00] rounded-[8px]">
                            DESCARGAR BROCHURE
                        </button>
                    </div>

                </div>

            </div>

        </section>
    
    </>
}

export default SectionContacto