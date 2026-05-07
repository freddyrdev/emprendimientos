export const HeroSection = () => {
    return (
        <section className="flex items-center justify-center flex-col gap-10">
            <h1 className="text-7xl max-w-4xl text-center font-semibold!">
                Emprendemos, creamos y 
                <span className="text-7xl font-semibold! text-(--temaPrimario)"> construimos juntos</span>
            </h1>
            <p className="text-lg font-normal! max-w-xl text-center">Desde diseño hasta productos innovadores, trabajamos para ofrecer experiencias y soluciones que aporten valor en cada detalle.</p>

            <div className="flex gap-5">
                <button className="boton-primario">Descubrir</button>
                <button className="boton-secundario">Contactar</button>
            </div>
        </section>
    )
}