import Image from "next/image"

const CardImgGaleria = (props:{url:string}):JSX.Element=>{

    return<>

        <div className="relative mr-2 ml-2 container-img-galeria w-[300px] h-[300px] min-w-[300px] md:w-[400px] md:h-[400px] md:min-w-[400px] md:min-h-[400px] bg-black rounded-[8px]">
            <Image
                loading="lazy"
                src={props.url}
                alt="Banda de metal Glowing Phoenix"
                fill={true}
                className="object-contain"

            />
        </div>
    </>
}

export default CardImgGaleria;