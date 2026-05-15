export interface SobreMiProps {
    titulo: string,
    color: string,
    lider: string,
    parrafo: string,
    imagen: string,
    contacto?: contactos
}

interface contactos { 
    whatsapp?: string,
    instagram?: string,
    tiktok?: string,
}