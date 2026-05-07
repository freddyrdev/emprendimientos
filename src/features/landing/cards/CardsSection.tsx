import CoolKeyProducto from "../../../assets/images/vaca.svg"
import inventario from "../../../assets/images/inventario.svg"

import { Card } from './components/Card';

export const CardSection = () => {
    return (
        <section className="flex flex-col items-center gap-8">
            <h2 className="text-4xl text-center">Lo que compartimos</h2>
            <p className="text-lg font-normal! max-w-xl text-center">Cada emprendimiento tiene su propia esencia, pero todos compartimos el deseo de crear, innovar y ofrecer algo diferente.</p>
            <article className="grid grid-cols-4 grid-rows-2 mx-50 gap-3">
                <Card 
                    titulo={'Diseño + Tech'} 
                    subtitulo={'Diseño gráfico creativo'} 
                    texto={'Creamos diseños modernos que hacen destacar tu identidad visual.'} 
                    imagen={'imagen hola'} 
                    iconoFA='fa-regular fa-lightbulb'
                    textoColorHover="group-hover:text-[#508B77]!"
                />
                <Card 
                    titulo={'MausePad'} 
                    subtitulo={'Mousepads personalizados'} 
                    texto={'Diseñamos mousepads únicos con estilo y personalidad.'} 
                    imagen={'imagen hola'} 
                    iconoFA='fa-regular fa-keyboard'
                    textoColorHover="group-hover:text-[#E94EDB]!"
                />
                <Card 
                    titulo={'Muyu Arte'} 
                    subtitulo={'Accesorios artesanales'} 
                    texto={'Elaboramos pulseras y pendientes hechos con creatividad y detalle.'} 
                    imagen={'imagen hola'} 
                    iconoFA='fa-regular fa-gem'
                    textoColorHover="group-hover:text-[#D4CBE2]!"
                />
                <Card 
                    titulo={'InventariosYAEC'} 
                    subtitulo={'Gestión de inventarios'} 
                    texto={'Organizamos productos para mejorar el control de tu negocio.'} 
                    imagen={ inventario } 
                    iconoFA='fa-regular fa-money-bill-1'
                    locacion="-bottom-11 right-4 h-40 rounded-xl"
                    textoColorHover="group-hover:text-[#284388]!"
                />
                <Card 
                    titulo={'Helados de hidrógeno'} 
                    subtitulo={'Experiencias innovadoras'} 
                    texto={'Creamos helados diferentes que sorprenden desde el primer vistazo.'} 
                    imagen={'imagen hola'} 
                    iconoFA='fa-regular fa-snowflake'
                    textoColorHover="group-hover:text-[#C2DFFD]!"
                />
                <Card 
                    titulo={'Charla motivadora'} 
                    subtitulo={'Inspiración y crecimiento'} 
                    texto={'Compartimos ideas que impulsan la motivación y el desarrollo personal.'} 
                    imagen={'imagen hola'} 
                    iconoFA='fa-regular fa-face-laugh'
                    textoColorHover="group-hover:text-[#FFF9C4]!"
                />
                <Card 
                    titulo={'Venta de té'} 
                    subtitulo={'Té natural y artesanal'} 
                    texto={'Ofrecemos tés seleccionados para disfrutar cada momento.'} 
                    imagen={'imagen hola'} 
                    iconoFA='fa-regular fa-star'
                    textoColorHover="group-hover:text-[#BB9531]!"
                />
                <Card 
                    titulo={'CoolKey'} 
                    subtitulo={'Llaveros personalizados'} 
                    texto={'Ofrecemos tés seleccionados para disfrutar cada momento.'} 
                    imagen={ CoolKeyProducto } 
                    iconoFA='fa-regular fa-face-smile-beam'
                    textoColorHover="group-hover:text-[#8B8B8B]!"
                />
            </article>
        </section>
    )
}