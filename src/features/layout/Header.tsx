import { Link } from "react-router"

export const Header = () => {
    return (
    <header className="border-b border-(--bordeOscuro) px-50 py-5">
        <nav className="flex gap-10 negrita">
            <Link to={""} className="hover:text-(--temaPrimario) animacion">Inicio</Link>
            <Link to={""} className="hover:text-(--temaPrimario) animacion">Categorias</Link>
            <Link to={""} className="hover:text-(--temaPrimario) animacion">Emprendimientos</Link>
            <Link to={""} className="hover:text-(--temaPrimario) animacion">Contactos</Link>
        </nav>
    </header>
    )
}