import { useEffect } from "react";
import usePeliculas from "../hooks/usePeliculas";

export default function ultimosLanzamientos() {
  const {
    obtenerPeliculas,
    pelis,
    pagina,
    paginaAnterior,
    paginaSiguiente,
    totalPaginas,
  } = usePeliculas();

  useEffect (()=>{
    obtenerPeliculas("now_playing")
  },[pagina]);


  return (<>
    <h2>Ultimos lanzamientos</h2>
    <div>
      {pelis.map((peli) => (
      <div key={peli.id} >
        <img
          src={`https://image.tmdb.org/t/p/w300${peli.poster_path}`}
          alt={peli.title}
      
        />
        <h3>{peli.title}</h3>
      </div>
    )
    )}
    </div>
    <div>
      <h2>Probando Paginación</h2>
      <div>
        <button onClick={paginaAnterior} disabled={pagina < 1}>Anterior</button>
          <span>Página {pagina} de {totalPaginas}</span>
          <button onClick={paginaSiguiente} disabled={pagina === totalPaginas}>Siguiente</button>
      </div>
    </div>
  </>
  )
}


 
