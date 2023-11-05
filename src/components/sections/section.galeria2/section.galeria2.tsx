"use client"
import { GET } from "@/app/api/about/route";
import Image from "next/image";
import { useEffect, useState } from "react";


const SectionGaleria2 = ():JSX.Element => {
    
    const saludo = "Hola";
    const size = 300;
    const [text,setText] = useState("Disfruta de toques en vivo con la mejor musica al estilo Glowing Phoenix");
    const [dataComponent,setdataComponent] = useState<any>("defecto")
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_DOMAIN +"/api/about")
        .then((data)=>{return data.json()})
        .then(data => {
            // Manipula los datos recibidos
            const parsedData = JSON.parse(data.rows[0].data);
            setdataComponent("parsedData");
            console.log("titulo: " +parsedData.titulo);
          })
    },[dataComponent])


    function cambiarColor() {
        alert("Cambiando color...");
    }

    return <section className="w-screen h-[1000px] bg-[#202020]">  
        <div className="container-titulos w-[90%] ml-[5%] h-[150px] border-black">
            <h1 className = "sm:text-[33px] md:text-[50px] text-[#FF3D00]"> {dataComponent.titulo} </h1>
            <h2 className = "text-[18px] text-[#FFFFFF]"> {text} </h2>
        </div>
        <div className="container-galeria w-[90%] ml-[5%] h-[800px] border border-gray" onClick={cambiarColor}>
            <div className="container-carruselA border border-white flex items-center overflow-x-scroll h-[350px] mb-[50px]">
                <Image className="ml-[2%] mr-[2%] rounded-[10px] bg-black pb-[3%] pt-[3%]" onClick={() => {setText("nuevo texto")}} src="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow" width={size} height={size} alt="imagen1"/>
                <Image className="ml-[2%] mr-[2%] rounded-[10px] bg-black pb-[3%] pt-[3%]" src="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow" width={size} height={size} alt="imagen2"/>
                <Image className="ml-[2%] mr-[2%] rounded-[10px] bg-black pb-[3%] pt-[3%]" src="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow" width={size} height={size} alt="imagen3"/>
                <Image className="ml-[2%] mr-[2%] rounded-[10px] bg-black pb-[3%] pt-[3%]" src="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow" width={size} height={size} alt="imagen4"/>
                <Image className="ml-[2%] mr-[2%] rounded-[10px] bg-black pb-[3%] pt-[3%]" src="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow" width={size} height={size} alt="imagen5"/>
            </div>
            <div className="container-carruselB border border-white flex items-center overflow-x-scroll h-[350px] mt-[50px]">
                <Image className="ml-[2%] mr-[2%] rounded-[10px] bg-black pb-[3%] pt-[3%]" src="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow" width={size} height={size} alt="imagen1"/>
                <Image className="ml-[2%] mr-[2%] rounded-[10px] bg-black pb-[3%] pt-[3%]" src="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow" width={size} height={size} alt="imagen2"/>
                <Image className="ml-[2%] mr-[2%] rounded-[10px] bg-black pb-[3%] pt-[3%]" src="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow" width={size} height={size} alt="imagen3"/>
                <Image className="ml-[2%] mr-[2%] rounded-[10px] bg-black pb-[3%] pt-[3%]" src="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow" width={size} height={size} alt="imagen4"/>
                <Image className="ml-[2%] mr-[2%] rounded-[10px] bg-black pb-[3%] pt-[3%]" src="https://cms.glowingphoenix.co/glowing-banda/assets/8k2uyysxfvcwcsow" width={size} height={size} alt="imagen5"/>
            </div>
        </div>
        {  saludo  }
    </section>;
}

export default SectionGaleria2;