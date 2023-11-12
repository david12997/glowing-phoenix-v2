import Image from "next/image"

const CardSong = (props:{url:string,title:string}):JSX.Element =>{

    return<>
        <div className="relative ml-2 mr-2 card-song min-w-[260px] max-w-[260px] max-h-[300px]  min-h-[300px] border-[3px] border-white rounded-[8px]">
            <div className="relative w-[100%] h-[80%]">
                <Image
                    src={props.url}
                    alt="Álbum Inner Desire By Glowing Phoenix"
                    fill={true}
                    loading="lazy"
                    className="object-contain"
                />
            </div>
            <div className="title-song w-[100%] h-[20%] flex items-center justify-center">
                <h3 className='text-[20px] text-white stroke-black'>{props.title}</h3>
            </div>
        </div>
    </>
}

export default CardSong