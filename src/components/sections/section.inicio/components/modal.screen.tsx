'use client'

import LazyVideo from "@/components/videos/lazy.video/lazy.video";
import { CloseTimes } from "@/icons";

export const ModalScreenSectionInicio = (props:{modal:boolean,setModal:any}):JSX.Element => {

    return<>
        <div className="screen fixed w-screen h-screen verflow-hidden bg-[#000000df] top-[0px] left-[0px] z-[9999]">
            <div onClick={()=>props.setModal(!props.modal)}  className="relative w-[96%] ml-[2%] z-[999]  h-[50px] flex items-center justify-end p-2 pt-4 cursor-pointer">
                <CloseTimes/>
                <div className="left-[20%] md:left-[43%] text-[24px] state-video absolute text-[#ff3d00]">
                    Following Dreams
                </div>
            </div>
            
            <div className="contianer-lanzamiento w-[100%] md:w-[60%] md:ml-[20%] mt-[100px] md:mt-[3%]">
              <LazyVideo src="https://player.vimeo.com/video/890639804?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" />
            </div>

        </div>
    </>
}

export default ModalScreenSectionInicio;