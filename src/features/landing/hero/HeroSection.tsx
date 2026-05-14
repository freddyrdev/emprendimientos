import { Link } from "react-router"

export const HeroSection = () => {
    return (
        <section className="flex items-center justify-center flex-col gap-10 lg:-translate-y-15">            
            <h1 className="lg:text-7xl lg:max-w-4xl md:text-5xl md:max-w-2xl text-3xl text-center font-semibold!">
                Emprendemos, creamos y
                <span className="lg:text-7xl md:text-5xl font-semibold! text-(--temaPrimario) text-3xl"> construimos juntos</span>
            </h1>
            <p className="text-lg font-normal! max-w-sm md:max-w-xl text-center">Desde diseño hasta productos innovadores, trabajamos para ofrecer experiencias y soluciones que aporten valor en cada detalle.</p>

            <div className="flex gap-5">
                <Link to={"/emprendimiento"} className="boton-primario">Descubrir</Link>
                <Link to={""} className="boton-secundario">Contactar</Link>
            </div>
        </section>
    )
}