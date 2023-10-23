
const Button1 = (props:{text:string, color:string,background:string,border:string}):JSX.Element => {



    return<>
        <button style={{color:props.color,background:props.background,border:props.border}} 
            className="w-[100%] h-[100%] rounded-[6px]   text-[20px] md:text-[23px]  flex items-center justify-center">
            {props.text}
        </button>
    </>
}

export default Button1;