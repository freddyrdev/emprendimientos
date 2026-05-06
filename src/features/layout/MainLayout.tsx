import { Outlet } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'

export const MainLayout = () => {
    return (
        <body className='bg-(--fondoGeneral) grid grid-rows-[auto_1fr_auto] h-screen'>
            <Header />
            <Outlet/>
            <Footer />
        </body>
    )
}