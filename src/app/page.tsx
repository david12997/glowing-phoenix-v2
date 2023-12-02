export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
import myDynamic  from 'next/dynamic'

import { GetData } from '@/services/get.data'
import { SectionGaleriaProps } from '@/components/sections/section.galeria/section.galeria';
import { SectionLanzamientosProps } from '@/components/sections/section.lanzamientos/section.lanzamientos';

const H5AudioPlayer = myDynamic(() => import('@/components/audio.player/h5.audio.player'));
const SectionVideoOficial = myDynamic(() => import('@/components/sections/section.video/section.video'));
const SectionInicio = myDynamic(() => import('@/components/sections/section.inicio/section.inicio'));
const SectionMusica = myDynamic(() => import('@/components/sections/section.musica/section.musica'));
const SectionNav = myDynamic(() => import('@/components/sections/section.nav/section.nav'));
const SectionEventos = myDynamic(() => import('@/components/sections/section.eventos/section.eventos'));
const SectionContacto = myDynamic(() => import('@/components/sections/section.contacto/section.contacto'));
const SectionFooter = myDynamic(() => import('@/components/sections/section.footer/section.footer'));
const SectionGaleria = myDynamic(() => import('@/components/sections/section.galeria/section.galeria'));
const SectionLanzamientos = myDynamic(() => import('@/components/sections/section.lanzamientos/section.lanzamientos'));


export default async function Home():Promise<JSX.Element> {

  const dataLandingPage = await GetData([
    process.env.NEXT_PUBLIC_DOMAIN + '/api/pages?page=1'
  
  ]).then(res => res);

  const dataSectionGaleria = JSON.parse(dataLandingPage[0].data[0].data) as SectionGaleriaProps
  const dataSectionLanzamiento = JSON.parse(dataLandingPage[0].data[1].data) as SectionLanzamientosProps

  return <>
    <h1 className='hidden'>
      Glowing Phoenix, banda de thrash metal originaria de Bogotá D.C.
    </h1>
    <SectionNav/>
    <SectionInicio/>
    <SectionLanzamientos
      main_img={dataSectionLanzamiento.main_img}
      txt_message_1={dataSectionLanzamiento.txt_message_1}
      txt_message2={dataSectionLanzamiento.txt_message2}
      txt_comming={dataSectionLanzamiento.txt_comming}
      txt_following={dataSectionLanzamiento.txt_following}
    />
    <SectionGaleria
      titulo={dataSectionGaleria.titulo}
      descripcion={dataSectionGaleria.descripcion}
      images1={dataSectionGaleria.images1}
      images2={dataSectionGaleria.images2}
    />
    <SectionMusica/>
    <SectionVideoOficial/>
    <SectionEventos/>
    <SectionContacto/>
    <SectionFooter/>
    <H5AudioPlayer />
  </>
}
