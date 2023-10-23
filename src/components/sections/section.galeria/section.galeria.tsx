import Image from "next/image"
import CardImgGaleria from "../../cards/card.img.galeria/card.img.galeria"

const SectionGaleria = () => {

    return<>
        <section  id="Galeria" className="w-screen h-[900px] md:h-[1100px]  bg-[#202020] pt-2 p-2">
            <div className="relative title-galeria w-[100%] md:w-[94%] md:ml-[3%] h-[100px] p-2 md:p-4 mb-6">
                <h1 className="text-[#ff3d00] text-[33px] md:text-[53px]">GALERIA GLOWING...</h1>
                <span className="text-white absolute top-[50px] md:top-[80px] text-[18px]">Disfruta de toques en vivo con la música al mejor estilo de Glowing Phoenix</span>
            </div>

            <div className="flex items-center container-galeria-1 w-[100%] md:w-[94%] md:ml-[3%] h-[340px] md:h-[450px]  overflow-x-scroll mb-4">

                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow"
                />
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/16x4tahjq51c0o0k"
                />
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/d1kna9tbi1sg0okg"
                />
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/dxtskg1hr0g00ksg"
                />
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/ic293qyrntkckw48"
                />
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/cbc83v7rrvccwg8w"
                />

                

            </div>
            <div className="flex items-center container-galeria-2 w-[100%] md:w-[94%] md:ml-[3%] h-[340px] md:h-[450px] overflow-x-scroll mt-4">
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/h15jqchw3r400gk4"
                />
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/cqsittbca5ss80gw"
                />
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/2aqwqlybtmsk88wg"
                />
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/dxtskg1hr0g00ksg"
                />
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow"
                />
                <CardImgGaleria
                    url="https://cms.glowingphoenix.co/glowing-banda/assets/n8azm765m00gcssg"
                />
            </div>

        </section>
    </>
}

export default SectionGaleria