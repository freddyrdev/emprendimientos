import DisenioTech from "../../assets/images/logos/DisenioTech.svg"
import Ichau from "../../assets/images/logos/Ichau.svg"
import Iza from "../../assets/images/logos/Iza.svg"
import Pillajo from "../../assets/images/logos/Tonto.svg"
import Cardenas from "../../assets/images/logos/Cardenas.svg"
import Herrera from "../../assets/images/logos/Herrera.svg"
import Caiza from "../../assets/images/logos/Caiza.svg"

import { SobreMi } from './components/SobreMi';

export const Emprendimiento = () => {
    return (
        <section className="py-25 px-100 flex flex-col gap-35">
            <SobreMi 
                titulo={"Diseño + Tech"} 
                color={"text-[#508B77]!"} 
                lider={"Daniel Rivera"} 
                parrafo={
                    "En DiseñoTech transformamos ideas en diseños visuales que transmiten identidad y creatividad. Nos enfocamos en crear contenido gráfico moderno y atractivo, adaptándonos a las necesidades de cada persona o proyecto para lograr resultados únicos y profesionales."
                } 
                imagen={ DisenioTech } 
            />
            <SobreMi 
                titulo={"MousePad"} 
                color={"text-[#E94EDB]!"} 
                lider={"Darwin Ichau"} 
                parrafo={
                    "En DiseñoTech transformamos ideas en diseños visuales que transmiten identidad y creatividad. Nos enfocamos en crear contenido gráfico moderno y atractivo, adaptándonos a las necesidades de cada persona o proyecto para lograr resultados únicos y profesionales."
                } 
                imagen={ Ichau } 
            />
            <SobreMi 
                titulo={"Muyu Arte"} 
                color={"text-[#D4CBE2]!"} 
                lider={"Bell Iza"} 
                parrafo={
                    "En Muyu Arte elaboramos accesorios artesanales como pulseras y pendientes hechos con dedicación y detalle. Cada creación busca transmitir autenticidad, creatividad y un estilo propio inspirado en el arte y la expresión personal."
                } 
                imagen={ Iza } 
            />
            <SobreMi 
                titulo={"InventariosYAEC"} 
                color={"text-[#284388]!"} 
                lider={"Mauricio Pillajo"} 
                parrafo={
                    "En InventariosYAEC trabajamos en la organización y gestión de productos para facilitar el control de inventarios. Nuestro objetivo es ayudar a mejorar la administración y optimización de los recursos de manera práctica y eficiente."
                } 
                imagen={ Pillajo } 
            />
            <SobreMi 
                titulo={"Helados de hidrogeno"} 
                color={"text-[#C2DFFD]!"} 
                lider={"Abigail Herrera"} 
                parrafo={
                    "En Helados de hidrógeno buscamos ofrecer una experiencia innovadora y diferente a través de productos creativos y llamativos. Nos enfocamos en combinar sabor, presentación y originalidad para crear momentos únicos."
                } 
                imagen={ Herrera } 
            />
            <SobreMi 
                titulo={"Charla motivadora"} 
                color={"text-[#FFF9C4]!"} 
                lider={"Mateo Cardenas"} 
                parrafo={
                    "En nuestras charlas motivadoras compartimos ideas, experiencias y mensajes enfocados en el crecimiento personal y la inspiración. Buscamos generar motivación, confianza y una mentalidad positiva en cada persona que nos escucha."
                } 
                imagen={ Cardenas } 
            />
            <SobreMi 
                titulo={"Venta de Té"} 
                color={"text-[#BB9531]!"} 
                lider={"Jonathan Caiza"} 
                parrafo={
                    "En Venta de té ofrecemos productos naturales pensados para disfrutar momentos de tranquilidad y bienestar. Nos enfocamos en brindar sabores agradables y experiencias relajantes a través de cada preparación."
                } 
                imagen={ Caiza } 
            />
        </section>
    )
}