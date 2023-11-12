"use client" //el componente debe ejecutarse del lado del cliente: en el navegador y no en el servidor, no se pk
import Image from "next/image";
import { useEffect, useState } from "react";




const SectionLanzamientos = ():JSX.Element => {

    //Definición de un estado para almacenar los elementos obtenidos
    //Se debe inicializar con algo antes de que se actualice con datos reales
    //no se puede usar null, no se pk
    const [dataComponent,setDataComponent] = useState<any>("defecto");

    //Definicion de un efecto para obtener los datos de la bd
    useEffect(() => {

        //Ruta API donde se hace la consulta
        fetch(process.env.NEXT_PUBLIC_DOMAIN +"/api/page-elements/following")
        .then((data)=>{return data.json()})
        .then(data => {
            // Almacenamiento del json obtenido en una variable
            const parsedData = JSON.parse(data.rows[0].data);
            // Escritura de datos en data component
            setDataComponent(parsedData);
          })

    }, []);

    //Elemento de react a retornar, representa la UI deseada

    return (
        <section className="w-screen h-[1100px] md:h-[700px] p-[10px] bg-[#000000] flex flex-wrap items-center overflow-x-hidden" >
            {/* Contenedor imagen */}            
            <div className="container-imagen w-[100%] md:w-[50%]  relative h-[700px] md:h-[600px]">
                <div className="container-text-mobile block md:hidden w-[90%] ml-[5%] mt-[30px]">
                    <h2 className = "text-[20px] text-[#FFFFFF] w-[60%]  ml-[20%] text-center bg-[#FF3D00]  text-stroke-half-px text-shadow"> {dataComponent.txt_comming} </h2>
                    <h1 className = "text-[25px] text-[#FFFFFF] w-[100%] text-center">{dataComponent.txt_following}</h1>
                </div>
                <div className = "container-img-following absolute w-[130%] md:w-[100%] ml-[-15%] md:ml-0 h-[60%] mt-[60px] md:mt-0 md:relative md:h-[100%]">
                    <Image
                        className="m-[1%]"
                        loading="lazy"
                        src={dataComponent.main_img}
                        fill = {true}
                        alt="imagen1"
                    />
                </div>
                
            </div>
            {/* Contenedor textos */}
            <div className="container-textos w-[100%] md:w-[50%] md:h-[600px] h-[300px]  text-center">
                <h2 className = "md:text-[35px] text-[27px] text-shadow text-stroke-half-px md:mt-[8%] mt-0  text-[#FFFFFF]"> {dataComponent.txt_message_1} </h2>
                <h2 className = "md:text-[30px] text-[27px] md:w-[40%] md:ml-[30%] w-[70%] ml-[15%] text-shadow text-stroke-half-px bg-[#FF3D00] border-none text-[#FFFFFF]"> {dataComponent.txt_message2} </h2>
                <h2 className = "text-[45px] text-[#FFFFFF] hidden md:block md:mt-[12%] mt-0"> {dataComponent.txt_comming} </h2>
                <h1 className = "text-[60px] text-[#FFFFFF] hidden md:block">{dataComponent.txt_following}</h1>
                <button className="text-[20px] mt-[50px] bg-[#FF3D00] rounded-[8px] w-[90%] md:w-[60%] h-[60px] ml-[1%] text-shadow text-stroke-half-px text-[#FFFFFF]"> Ver trailer </button>
                <h3></h3>

            </div>

        </section>
    );
}

export default SectionLanzamientos;