import { Routes, Route } from "react-router"

import { MainLayout } from "./features/layout/MainLayout";
import { Landing } from "./features/landing/Landing";
import { Emprendimiento } from "./features/emprendimientos/Emprendimiento";
import { Error404 } from "./features/errors/Error404";

export const App = () => {
    return (
        <Routes>
            <Route element={ <MainLayout /> }>
                <Route path="/" element={ <Landing /> }/>
                <Route path="/emprendimiento" element={ <Emprendimiento /> }/>
            </Route>
            <Route path="/*" element={<Error404 />} />
        </Routes>
    )
}