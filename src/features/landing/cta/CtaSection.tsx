import { Link } from "react-router"

export const CtaSection = () => {
    return (
        <section className="flex flex-col items-center gap-6 md:gap-3 mb-40">
            <h2 className="text-3xl mx-0 md:text-4xl text-center">Conecta con nuestros emprendimientos</h2>
            <p className="text-lg font-normal! max-w-xl text-center mx-10 md:mx-0">Descubre más sobre cada proyecto y forma parte de esta comunidad de ideas, creatividad y emprendimiento.</p>
            <div className="flex gap-5">
                <Link to={"/emprendimiento"} className="boton-primario">Explorar</Link>
                <Link to={"/"} className="boton-secundario">Contacto</Link>
            </div>
        </section>
    )
}