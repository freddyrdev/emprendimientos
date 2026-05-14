import { Link } from "react-router"

export const Header = () => {
    return (
    <header className="border-b border-(--bordeOscuro) px-10 md:px-25 lg:px-50 py-5 z-10">
        <nav className="flex gap-10 negrita">
            <Link to={""} className="hover:text-(--temaPrimario) animacion">Inicio</Link>
            <Link to={"/emprendimiento"} className="hover:text-(--temaPrimario) animacion">Emprendimientos</Link>
        </nav>
    </header>
    )
}