import type { CardProps } from "../types/type";

export const Card = ({ iconoFA, texto, titulo, estilo_icono }: CardProps) => {
    return (
    <div className="flex items-center flex-col gap-3">
        <i className={`${ iconoFA } text-lg ${ estilo_icono } p-2 boton-secundario cursor-default`}></i>
        <div className="flex items-center flex-col text-center">
            <h3 className="text-lg">{ titulo }</h3>
            <p className="font-normal!">{ texto }</p>
        </div>
    </div>
    )
}