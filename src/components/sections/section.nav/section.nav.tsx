'use client'

import Button1 from "@/components/buttons/button.1/button.1";
import { ArrowRight, Bars } from "@/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

const SectionNav = (): JSX.Element => {
  const OptionsNav: string[] = [
    "Inicio",
    "Música",
    "Eventos",
    "Galeria",
    "Contacto",
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [modalMenu, setModalMenu] = useState<boolean>(false);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href") as string;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <div style={ modalMenu ? {display:'block'} : {display:'none'} } className="z-[99999] bg-[#121212]  w-screen  h-screen fixed block md:hidden">
        <div className="relative menu-close w-[100%] h-[50px] flex items-center justify-center text-[20px] text-[#ffffff]">
          Menú <span onClick={()=>setModalMenu(!modalMenu)} className="absolute left-[90%]"><ArrowRight/></span>
        </div>
        <div className="links w-[100%] mt-[36px] p-4">
          {OptionsNav.map((option: string, index: number) =>
            <a
              href={`#${option}`}
              key={index}
              className="text-white cursor-pointer w-[100%] h-[59px] mt-2 mb-10 block"
              onClick={(e)=>{
                setModalMenu(!modalMenu)
                handleNavClick(e) 
              }}
            >
              <Button1
                text={option}
                color="#ffffff"
                background="#ff3d00"
                border="3px solid #ff3d00"
              />

            </a>
          )  
          }
        </div>
      </div>

      <nav
        className={`fixed w-[99vw] h-[46px] top-[0px] z-[99] flex ${
          visible ? "" : "hidden"
        }`}
      >
        <div className="containerlogo ml-2 md:ml-4">
          <Image
            src="https://cms.glowingphoenix.co/glowing-banda/assets/kzkjzor7vtw4kwso"
            alt="Logo Glowing Phoenix"
            width={50}
            height={80}
            priority={true}
          />
        </div>
        <div className="options-desktop hidden md:block h-[100%] w-[50%] ml-[50%] p-2">
          <div className="flex justify-between items-center w-[100%] h-[100]">
            {OptionsNav.map((option: string, index: number) => {
              return (
                <a
                  href={`#${option}`}
                  key={index}
                  className="text-stroke-3 text-[20px] text-white cursor-pointer"
                  onClick={handleNavClick}
                >
                  {option}
                </a>
              );
            })}
          </div>
        </div>
        <div className="absolute options-mobile  md:hidden w-[100%] h-[50px]  flex justify-center items-center mt-2">
          
          <span className="text-[20px] text-white">
            Glowing Phoenix
          </span> 
          <span onClick={()=>setModalMenu(!modalMenu)} className="absolute left-[88%]">
            <Bars />
          </span>
       
        </div>

      </nav>
    </>
  );
};

export default SectionNav;