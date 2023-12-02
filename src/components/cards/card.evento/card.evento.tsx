import Image from "next/image"

const CardEvento = (props:{src:string,fecha:string}):JSX.Element=>{

    return<>
        <div className="relative img-evento w-[300px] min-w-[300px] md:w-[460px] md:min-w-[460px] md:h-[450px] h-[300px]  mt-[30px]  ml-2 mr-2">
            <div className="absolute text-[22px] text-[#ff3d00] top-[-69px]">
                {props.fecha}
            </div>
            <div className="absolute text-[17px] text-white top-[-40px]">
                --------------------------
            </div>
            <Image
                src={props.src}
                alt="Evento Glowing Phoenix"
                fill={true}
                className="object-cover"
                loading="lazy"
                
            />
        </div>
    </>
}

export default CardEvento