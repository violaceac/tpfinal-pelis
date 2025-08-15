import axios from "axios";
import { useState } from "react";


export default function usePeliculas() {

    const [pelis, setPelis] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(1)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
     
    //funcion para obtener peliculas populares
    async function obtenerPeliculas(tipo){
      const apiKey = import.meta.env.VITE_API_KEY_PELICULAS;
      const url = `https://api.themoviedb.org/3/movie/${tipo}?api_key=${apiKey}&language=es-ES&page=${pagina}`;
      
      try {
            const {data} = await axios.get(url)
            console.log (data)
            setPelis(data.results);
            setTotalPaginas(data.total_pages);
            setLoading(true);
            setError(null);
          } catch (error) {
            setError("Error al obtener peliculas");
            setLoading(false)
          }

      
    }
    
    //obtener peliculas populares
    function obtenerMasPopulares(){
      obtenerPeliculas("popular")
    }

    //obtener ultimos lanzamientos
    function obtenerUltimosLanzamientos(){
      obtenerPeliculas("now_playing")
    }

      // Paginacion
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
      obtenerUltimosLanzamientos,
      paginaAnterior,
      paginaSiguiente
    
    }
  
    return data
  }
