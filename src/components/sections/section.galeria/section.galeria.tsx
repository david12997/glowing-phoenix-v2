import Image from "next/image"
import CardImgGaleria from "../../cards/card.img.galeria/card.img.galeria"

export interface SectionGaleriaProps {

    images1: string[],
    images2: string[],
    titulo: string,
    descripcion: string
}

const SectionGaleria = (props:SectionGaleriaProps) => {

    return<>
        <section  id="Galeria" className="w-screen h-[900px] md:h-[1100px]  bg-[#202020] pt-2 p-2">
            <div className="relative title-galeria w-[100%] md:w-[94%] md:ml-[3%] h-[100px] p-2 md:p-4 mb-6">
                <h1 className="text-[#ff3d00] text-[33px] md:text-[53px]">GALERIA GLOWING</h1>
                <span className="text-white absolute top-[50px] md:top-[80px] text-[18px]">¡Descubre los momentos detrás de nuestra música!</span>
            </div>

            <div className="flex items-center container-galeria-1 w-[100%] md:w-[94%] md:ml-[3%] h-[340px] md:h-[450px]  overflow-x-scroll mb-4">
                {
                    props.images1.map((item:string,index:number) => {
                        return <CardImgGaleria
                            key={index}
                            url={item}
                        />
                    })
                }

                

            </div>
            <div className="flex items-center container-galeria-2 w-[100%] md:w-[94%] md:ml-[3%] h-[340px] md:h-[450px] overflow-x-scroll mt-4">
                {
                    props.images2.map((item:string,index:number) => {
                        return <CardImgGaleria
                            key={index}
                            url={item}
                        />
                    })
                }
            </div>

        </section>
    </>
}

export default SectionGaleria