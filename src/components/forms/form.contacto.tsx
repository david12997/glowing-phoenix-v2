'use client'

const FormContacto = ():JSX.Element => {

    return<>
        <form onSubmit={(e)=>e.preventDefault()} className="w-[100%] md:w-[46%] h-[600px] mb-[50px] md:mb-[0px]">

            <div className="container w-[100%] text-[18px] md:text-[20px] md:p-3">
                <label className=" w-[100%] text-[30px] md:text-[40px] text-[#ff3d00]">Dejanos tu mensaje</label>
                    <div className="nombre w-[100%] h-[70px] mb-[26px]">
                        <label className="text-white">Nombre</label>
                        <input className="w-[100%] h-[50px] rounded-[8px]" placeholder=" Ej: Juan diaz" type="text"  />
                    </div>
                    <div className="correo w-[100%] h-[70px] block mb-[26px]">
                        <label className="text-white">Correo</label>
                        <input className="w-[100%] h-[50px] rounded-[8px]" placeholder=" Ej: juan@juan.com" type="text"  />
                    </div>

                    <div className="asunto tx-white w-[100%] h-[70px] mb-[26px]">
                        <label className="text-white">Asunto</label>
                       <select name="asunto" className=" w-[100%] h-[60px] rounded-[8px]">
                    
                            <option>Eventos y toques en vivo</option>
                            <option>Colaboraciones Musicales</option>
                            <option>Contrataciones</option>
                       </select>
                    </div>
                    <div className="mensaje mb-[26px]">
                        <label className="text-white">Mensaje</label>
                        <textarea className="w-[100%] h-[100px] rounded-[8px]" placeholder="Escribe tu mensaje aquí"></textarea>
                    </div>

                    <button className="text-white  w-[100%] text-[22px] h-[70px] bg-[#ff3d00] rounded-[8px]">
                        ENVIAR MENSAJE
                    </button>

            </div>
        </form>
    </>
}

export default FormContacto;