"use client" //el componente debe ejecutarse del lado del cliente: en el navegador y no en el servidor, no se pk
import Image from "next/image";
import { useState } from "react";
import ModalScreenSectionInicio from "../section.inicio/components/modal.screen";

export interface SectionLanzamientosProps {

    main_img:string,
    txt_message_1:string,
    txt_message2:string,
    txt_comming:string,
    txt_following:string

}


const SectionLanzamientos = (props:SectionLanzamientosProps):JSX.Element => {


    const [modal,setModal] = useState<boolean>(false)
    


    return <>
            <span style={modal ? {display:'block'}:{display:'none'}} className="modal-screen-section-inicio">
                <ModalScreenSectionInicio
                    modal={modal}
                    setModal={setModal}
                />
            </span>
            <section id="Estrenos" className="w-screen h-[1100px] md:h-[700px] p-[10px] bg-[#000000] flex flex-wrap items-center overflow-x-hidden" >
            {/* Contenedor imagen */}            
            <div className="container-imagen w-[100%] md:w-[50%]  relative h-[700px] md:h-[600px]">
                <div className="container-text-mobile block md:hidden w-[90%] ml-[5%] mt-[30px]">
                    <h2 className = "text-[20px] text-[#FFFFFF] w-[60%]  ml-[20%] text-center bg-[#FF3D00]   text-shadow"> {props.txt_comming} </h2>
                    <h1 className = "text-[25px] text-[#FFFFFF] w-[100%] text-center">{props.txt_following}</h1>
                </div>
                <div className = "container-img-following absolute w-[130%] md:w-[100%] ml-[-15%] md:ml-0 h-[60%] mt-[60px] md:mt-0 md:relative md:h-[100%]">
                    <Image
                        className="m-[1%]"
                        priority={true}
                        src={props.main_img}
                        fill = {true}
                        alt="imagen1"
                    />
                </div>
                
            </div>
            {/* Contenedor textos */}
            <div className="container-textos w-[100%] md:w-[50%] md:h-[600px] h-[300px]  text-center">
                <h2 className = "md:text-[35px] text-[27px] text-shadow  md:mt-[8%] mt-0  text-[#FFFFFF]"> {props.txt_message_1} </h2>
                <h2 className = "md:text-[30px] text-[27px] md:w-[40%] md:ml-[30%] w-[70%] ml-[15%] text-shadow  bg-[#FF3D00] border-none text-[#FFFFFF]"> {props.txt_message2} </h2>
                <h2 className = "text-[45px] text-[#FFFFFF] hidden md:block md:mt-[12%] mt-0"> {props.txt_comming} </h2>
                <h1 className = "text-[60px] text-[#FFFFFF] hidden md:block">{props.txt_following}</h1>
                <button  onClick={()=>setModal(!modal)} className="text-[20px] mt-[50px] bg-[#FF3D00] rounded-[8px] w-[90%] md:w-[60%] h-[60px] ml-[1%] text-shadow  text-[#FFFFFF]"> Ver preview </button>
              

            </div>

        </section>
    </>

}

export default SectionLanzamientos;