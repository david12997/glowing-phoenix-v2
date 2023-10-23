
const SectionVideoOficial = ():JSX.Element => {

    return<>
        <section className="relative w-screen max-w-screen min-h-[700px] max-h-[1200px]  md:p-4  bg-[#121212] pt-[30px] pb-[60px]">

            <div className="title-video-1 w-[100%] text-[32px]  md:text-[38px] text-[#ff3d00] md:mt-6 ">
                <h1 className="w-[90%] ml-[5%]">
                    VIDEO OFICIAL MY OWN DEAMON
                </h1>
                <p className="text-white text-[18px] md:text-[20px] w-[90%] ml-[5%]">
                    Vídeo musical de "My Own Demon" del álbum "Inner Desire"
                    Vídeo filmado en Bogotá y embalse de Tomine Colombia , en noviembre 2022.
                    <br></br>
                    Compositor: Crizzo<br></br>
                    Fecha de estreno: 7 Febrero de 2023 
                </p>
            </div>

            <div className="relative container-video w-[100%] md:w-[90%] md:ml-[5%] mt-[40px] md:mb-[50px] ">

                <div className="desktop-video hidden  w-[100%] md:flex">
                    <iframe className="w-[70%] h-[73vh] "
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/URSS6yOqRi0?si=iy040BTwPhmal2u6" 
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                    <div className="lyrics w-[30%] h-[73vh]  p-2 overflow-y-scroll">
                        <div className="w-[100%] title-letra text-[20px] text-[#ff3d00] flex items-center justify-center">
                            LETRA MY OWN DEMON
                        </div>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            ESTROFA 1<br/>
                            Now I feel so lost                                               
                            I only have myself                                                  
                            Destroying all your pain                                         
                            Burning uncontrolled.                                             
                        </p>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            ESTROFA 2<br/>
                            This road is rough and hard                                               
                            The obstacles? endless                                         
                            The stars refues to shine                                         
                            I'll follow my own ways                                         
                        </p>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            CORO<br/>
                            You will be in hell “fucking naked”.                                               
                            Releasing your “worst demon”.                                      
                            Ohh ohh ohh ohh ohh  “break free it”.                                       
                            Ohh ohh ohh ohh ohh  “run free”. 
                            We'll all be in hell “everyone”.     
                            Releasing our “own demon”.  
                            This is for all of you  “break free it”.   
                            “Run free”                           
                        </p>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            ESTROFA 3<br/>
                            Dreams seem to end       
                            Obsession is killing me  
                            Oh God I've been blinded            
                            I'm already losing my mind. 
                        </p>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            ESTROFA 4<br/>
                            Fears are my demons       
                            Fighting all the time 
                            My tears are my demons            
                            False images to my mind. 
                        </p>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            BRAKE DOWN<br/>
                            “We've” been mistreated conspiracies       
                            go and come, far away.<br></br> 
                            “Raping” our souls suffering by the lies            
                            What 's going on?  
                        </p>
                        
                    </div>
                </div>


                <div className="relative mobile-video block md:hidden">
                    <iframe className="h-[300px] w-[100%]]" 
                        width="100%" 
                        height="100%"
                        src="https://www.youtube.com/embed/URSS6yOqRi0?si=iy040BTwPhmal2u6" 
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                    <div className="letra-mobile w-[100%] h-[170px]  overflow-y-scroll p-2">
                        <div className="w-[100%] title-letra text-[20px] text-[#ff3d00] flex items-center justify-center">
                            LETRA MY OWN DEMON
                        </div>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            ESTROFA 1<br/>
                            Now I feel so lost                                               
                            I only have myself                                                  
                            Destroying all your pain                                         
                            Burning uncontrolled.                                             
                        </p>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            ESTROFA 2<br/>
                            This road is rough and hard                                               
                            The obstacles? endless                                         
                            The stars refues to shine                                         
                            I'll follow my own ways                                         
                        </p>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            CORO<br/>
                            You will be in hell “fucking naked”.                                               
                            Releasing your “worst demon”.                                      
                            Ohh ohh ohh ohh ohh  “break free it”.                                       
                            Ohh ohh ohh ohh ohh  “run free”. 
                            We'll all be in hell “everyone”.     
                            Releasing our “own demon”.  
                            This is for all of you  “break free it”.   
                            “Run free”                           
                        </p>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            ESTROFA 3<br/>
                            Dreams seem to end       
                            Obsession is killing me  
                            Oh God I've been blinded            
                            I'm already losing my mind. 
                        </p>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            ESTROFA 4<br/>
                            Fears are my demons       
                            Fighting all the time 
                            My tears are my demons            
                            False images to my mind. 
                        </p>
                        <p className="text-white mt-6 mb-6 text-[18px]">
                            BRAKE DOWN<br/>
                            “We've” been mistreated conspiracies       
                            go and come, far away.<br></br> 
                            “Raping” our souls suffering by the lies            
                            What 's going on?  
                        </p>
                    </div>
                </div>

            </div>

        </section>
    </>
}

export default SectionVideoOficial