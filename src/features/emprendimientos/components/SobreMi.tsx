import type { SobreMiProps } from "../types"

export const SobreMi = ({ color, imagen, lider, parrafo, titulo }: SobreMiProps) => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-4">
                <div className="">
                    <h2 className={`text-4xl ${ color }`}>{ titulo }</h2>
                    <span className="font-normal text-[12px] text-(--textoSecundario)">{ lider } - Lider del emprendimiento</span>
                </div>
                <div className="max-w-100">
                    <p className="font-normal">{ parrafo }</p>
                </div>
            </div>
            <div className="w-60 h-60 bg-(--fondoImagen) outline-(--fondoImagen) flex items-center justify-center rounded-xl outline-2 outline-offset-5">
                <img src={ imagen } alt="" width={110}/>
            </div>
        </div>
    )
}