import axios from "axios";
import { useState } from "react"

function useMasPopulares() {

  const [pelisMasPopulares, setPelisMasPopulares] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1);

  //funcion para llamar a peliculas populares
  async function obtenerPeliculasPopulares() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=${pagina}` ;
    
    try {
      const {data} = await axios(url)
      console.log (data)
      setPelisMasPopulares(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  function paginaAnterior() {
    if (pagina > 1) setPagina(pagina - 1);
  }

  function paginaSiguiente() {
    if (pagina < totalPaginas) setPagina(pagina + 1);
  }


  const data = {
    obtenerPeliculasPopulares,
    pelisMasPopulares,
    setPelisMasPopulares,
    pagina,
    setPagina,
    obtenerPeliculasPopulares,
    paginaAnterior,
    paginaSiguiente,
    totalPaginas,
    setTotalPaginas
  }


  return data
   
  
   
}

export default useMasPopulares