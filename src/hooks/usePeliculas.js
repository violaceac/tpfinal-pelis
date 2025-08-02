import axios from "axios";
import { useState } from "react";


export default function usePeliculas() {

    const [pelis, setPelis] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(1);
    

    
    //funcion para obtener peliculas populares
    async function obtenerMasPopulares(){
      const apiKey = import.meta.env.VITE_API_KEY_PELICULAS;
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=${pagina}`;
      
      try {
            const {data} = await axios.get(url)
            console.log (data)
            setPelis(data.results)
            setTotalPaginas(data.total_pages)
          } catch (error) {
            console.error("Error al obtener peliculas")
          }
    }
      
        function paginaAnterior() {
          if (pagina > 1) setPagina(pagina - 1);
        }
      
        function paginaSiguiente() {
          if (pagina < totalPaginas) setPagina(pagina + 1);
        }
    
        const data = {
          pelis,
          pagina,
          totalPaginas,
          obtenerMasPopulares,
          paginaAnterior,
          paginaSiguiente
        }
  
    return data
  }
