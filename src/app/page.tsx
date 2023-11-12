import H5AudioPlayer from '@/components/audio.player/h5.audio.player'
import SectionVideoOficial from '@/components/sections/section.video/section.video'

import SectionInicio from '@/components/sections/section.inicio/section.inicio'
import SectionMusica from '@/components/sections/section.musica/section.musica'
import SectionNav from '@/components/sections/section.nav/section.nav'
import SectionEventos from '@/components/sections/section.eventos/section.eventos'
import SectionContacto from '@/components/sections/section.contacto/section.contacto'
import SectionFooter from '@/components/sections/section.footer/section.footer'
import SectionGaleria from '@/components/sections/section.galeria/section.galeria'
import SectionLanzamientos from '@/components/sections/section.lanzamientos/section.lanzamientos'

export default function Home() {
  return <>
    <SectionNav/>
    <SectionInicio/>
    <SectionLanzamientos/>
    <SectionGaleria/>
    <SectionMusica/>
    <SectionVideoOficial/>
    <SectionEventos/>
    <SectionContacto/>
    <SectionFooter/>
    <H5AudioPlayer />
  </>
}
