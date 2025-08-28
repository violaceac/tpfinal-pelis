import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home"
import UltimosLanzamientos from "../pages/UltimosLanzamientos"
import Buscador from "../pages/Buscador"

export default function Router() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/">
       <Route index element={<Home />}>
        <Route path="/UltimosLanzamientos" element={<UltimosLanzamientos />} />
        <Route path="/Populares" element={<MasPopulares />} />
        <Route path="/Buscar" element={<Buscador />} />
       </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

