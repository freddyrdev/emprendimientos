import { Link } from "react-router"

export const Error404 = () => {
    return (
        <main className="flex items-center justify-center h-screen bg-(--fondoGeneral) flex-col gap-4">
            <h1 className="text-6xl">ERROR 404</h1>
            <p className="font-normal text-(--textoSecundario)! w-100 text-center">La direccion solicitada no fue encontrada puede ser el caso de que la pagina no existe o la direccion sea incorrecta</p>
            <Link to="/" className="boton-primario px-2 py-1">Regresar</Link>
        </main>
    )
}