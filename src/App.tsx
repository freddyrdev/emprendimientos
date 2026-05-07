import { Routes, Route } from "react-router"

import { MainLayout } from "./features/layout/MainLayout";
import { Landing } from "./features/landing/Landing";

export const App = () => {
    return (
        <Routes>
            <Route element={ <MainLayout /> }>
                <Route path="/" element={ <Landing /> }/>
                {/* <Route path="/emprendimiento" element={ <Emprendimiento /> }/> */}
            </Route>
        </Routes>
    )
}