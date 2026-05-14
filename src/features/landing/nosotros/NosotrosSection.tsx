import { Card } from './components/Card';
export const NostrosSection = () => {
    return (
        <section className="md:mt-0 lg:mt-60 flex flex-col items-center gap-8 mx-10 md:mx-0">
            <h2 className="text-4xl text-center">Lo que nos une</h2>
            <p className="text-lg font-normal! max-w-xl text-center">Aunque cada emprendimiento tiene su propio estilo, todos compartimos las ganas de crear, innovar y ofrecer algo auténtico.</p>
            <article className="grid md:grid-cols-2 lg:grid-cols-3 mx-20 md:mx-30 lg:mx-70 gap-10 lg:gap-5">
                <Card 
                    iconoFA={'fa-regular fa-lightbulb'} 
                    titulo={'Creatividad'} 
                    texto={'Buscamos transformar ideas en proyectos con personalidad y originalidad.'}
                    estilo_icono='text-[#FFF9C4] boton-secundario cursor-default' 
                />
                <Card 
                    iconoFA={'fa-regular fa-gem'} 
                    titulo={'Innovación'} 
                    texto={'Apostamos por nuevas ideas y experiencias que conecten con las personas.'} 
                    estilo_icono='text-[#B9F2FF]' 
                />
                <Card 
                    iconoFA={'fa-regular fa-heart'} 
                    titulo={'Pasión'} 
                    texto={'Cada emprendimiento nace del esfuerzo, dedicación y amor por lo que hacemos.'} 
                    estilo_icono='text-[#F88379]'
                />
            </article>
        </section>
    )
}