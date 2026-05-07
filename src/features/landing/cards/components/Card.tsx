import type { CardProps } from "../types/type"

export const Card = ({ 
    titulo, 
    subtitulo, 
    texto,  
    imagen, 
    iconoFA, 
    locacion = "-bottom-25 -left-20",
    textoColorHover = ""
}: CardProps) => {
    return (
        <div className="card flex flex-col gap-3 relative pb-40 cursor-default select-none overflow-hidden group">
            <div className={`flex gap-2 items-center`}>
                <i className={`${ iconoFA } ${ textoColorHover } text-base animacion`}></i>
                <h3 className={`text-lg ${ textoColorHover } animacion`}>{ titulo }</h3>
            </div>
            <div className="">
                <h4 className={`${ textoColorHover } animacion`}>{ subtitulo }</h4>
                <p className="font-normal! text-(--textoSecundario)">{ texto }</p>
            </div>
            <img src={ imagen } alt={ titulo } className={`absolute ${ locacion } grayscale group-hover:grayscale-0 animacion`}/>
        </div>
    )
}