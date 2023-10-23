'use client'

import { CloseTimes } from "@/icons";

export const ModalScreenSectionInicio = (props:{modal:boolean,setModal:any}):JSX.Element => {

    return<>
        <div className="screen fixed w-screen h-screen verflow-hidden bg-[#000000df] top-[0px] left-[0px] z-[9999]">
            <div onClick={()=>props.setModal(!props.modal)}  className="relative w-[96%] ml-[2%]  h-[50px] flex items-center justify-end p-2 pt-4 cursor-pointer">
                <CloseTimes/>
                <div className="left-[20%] md:left-[43%] text-[24px] state-video absolute text-[#ff3d00]">
                    Following Dreams
                </div>
            </div>
            <div className="contianer-lanzamiento w-[100%] md:w-[60%] md:ml-[20%] mt-[100px] md:mt-[3%]">
                <video autoPlay autoFocus  controls preload="metadata" className="w-[94%] ml-[3%]">
                    <source src="https://cms.glowingphoenix.co/glowing-banda/assets/4bmfo2pvcfmskw8w" type="video/mp4" />
                </video>
            </div>
            <div className="w-[100%] md:w-[60%] md:ml-[20%] pl-6 pt-2 text-[#ff3d00] text-[18px]">
                Cancion: Following Dreams <br/> 
                Segundo hit musical del álbum "INNER DESIRE"

            </div>
        </div>
    </>
}

export default ModalScreenSectionInicio;