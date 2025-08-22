import axios from "axios";
import { useState } from "react";


export default function usePeliculas() {

    const [pelis, setPelis] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(1)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [peliculaDetalle, setPeliculaDetalle] = useState(null)

    const apiKey = import.meta.env.VITE_API_KEY;
     
    //funcion para obtener peliculas 
    async function obtenerPeliculas(tipo){
      
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
    
    
     // Paginacion
    function paginaAnterior() {
      if (pagina > 1) setPagina(pagina - 1);
    }
      
    function paginaSiguiente() {
      if (pagina < totalPaginas) setPagina(pagina + 1);

    }  
    
    //detalle pelicula
    async function obtenerDetallePelicula(id){
      console.log("obtenerDetalle se ejecuto")
      setLoading(true);
       try{
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES&append_to_response=videos`;
        const { data } = await axios.get(url);
        setPeliculaDetalle(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError ("Error al obtener el detalle de la pelicula");
      } finally {
       setLoading(false);
      }
   }
      
  

    
    const data = {
      pelis,
      pagina,
      totalPaginas,
      loading,
      error,
      obtenerPeliculas,
      obtenerDetallePelicula,
      paginaAnterior,
      paginaSiguiente,
      peliculaDetalle
    }
  
    return data
  }
