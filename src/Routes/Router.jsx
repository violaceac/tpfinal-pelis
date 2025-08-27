import { BrowserRouter, Routes, Route } from "react-router"

import Home from "../pages/Home"
import UltimosLanzamientos from "../pages/UltimosLanzamientos"
import MasPopulares from "../pages/MasPopulares"
import PelisFavoritas from "../pages/PelisFavoritas"
import Buscador from "../pages/Buscador"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Router() {
    return(
        <BrowserRouter>
        <Header element={<Header />} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lanzamientos" element={<UltimosLanzamientos />} />
            <Route path="/populares" element={<MasPopulares />} />
            <Route path="/favoritos" element={<PelisFavoritas />} />
            <Route path="/buscar" element={<Buscador />} />
            <Route path="/pelicula/:id" element={<DetallePelicula />} />
        </Routes>
        <Footer element={<Footer />} />
        </BrowserRouter>
    )
}

export default Router