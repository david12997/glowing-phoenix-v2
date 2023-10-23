'use client'

import Button1 from "@/components/buttons/button.1/button.1"
import ModalScreenSectionInicio from "./modal.screen";
import { useState } from "react";

const ButtonSectionInicio = ():JSX.Element => {

   const [modal,setModal] = useState<boolean>(false)

    return<>
        <span style={modal ? {display:'block'}:{display:'none'}} className="modal-screen-section-inicio">
            <ModalScreenSectionInicio
                modal={modal}
                setModal={setModal}
            />
        </span>

        <span className="w-[290px] md:w-[390px] h-[70px] md:h-[80px]" 
            onClick={()=>setModal(!modal)}
        >
        
            <Button1
                text="PRÓXIMOS LANZAMIENTOS"
                color="#000000"
                background="#ffffff"
                border="1px solid #ffffff"
                
            />
            
        </span>
    </>

}

export default ButtonSectionInicio;