import type { SobreMiProps } from "../types"

export const SobreMi = ({ color, imagen, lider, parrafo, titulo, contacto }: SobreMiProps) => {
    return (
        <div className="flex md:justify-between flex-col md:flex-row items-center md:items-start md:gap-0 gap-15">
            <div className="flex flex-col gap-4">
                <div className="">
                    <h2 className={`text-4xl ${ color }`}>{ titulo }</h2>
                    <span className="font-normal text-[12px] text-(--textoSecundario)">{ lider } - Lider del emprendimiento</span>
                </div>
                <div className="max-w-100">
                    <p className="font-normal">{ parrafo }</p>
                </div>
                <div className="flex gap-5">
                    { contacto?.whatsapp && ( <a href={ contacto.whatsapp } target="_blank" className="boton-primario px-2 py-1">
                        <i className="fa-brands fa-whatsapp"></i> Whatsapp
                    </a> )}
                    { contacto?.instagram && ( <a href={ contacto.instagram } target="_blank" className="boton-primario instagram px-2 py-1">
                        <i className="fa-brands fa-instagram"></i> Instagram
                    </a> ) }
                    { contacto?.tiktok && ( <a href={ contacto.tiktok } target="_blank" className="boton-primario tiktok px-2 py-1">
                        <i className="fa-brands fa-tiktok"></i> TikTok
                    </a> ) }
                </div>
            </div>
            <div className="w-60 h-60 bg-(--fondoImagen) outline-(--fondoImagen) flex items-center justify-center rounded-xl outline-2 outline-offset-5">
                <img src={ imagen } alt="" width={110}/>
            </div>
        </div>
    )
}