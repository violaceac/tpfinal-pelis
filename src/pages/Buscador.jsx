import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import usePeliculas from "../hooks/usePeliculas";


function mostrarBusqueda() {
  const { pelis, loading, error, buscarPeliculas } = usePeliculas();
  const [textoBusqueda, setTextoBusqueda] = useState("");


  // cada vez que cambia el search, hago la búsqueda
  useEffect(() => {
    buscarPeliculas(textoBusqueda);
  }, [textoBusqueda]);


  const manejarCambioDeBusqueda = (event) => {
    setTextoBusqueda(event.target.value);
  };


  return (
    <div>
      <h1>Buscador de Películas</h1>
       <div className="search-container">
        <input
          type="text"
          placeholder="Buscar películas..."
          value={textoBusqueda}
          onChange={manejarCambioDeBusqueda}
        />
       </div>


    {loading && <p>Cargando...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}

     <div className="movie-list" style={{ display: "flex", flexWrap: "wrap" }}>
        {!loading && pelis.length > 0 ? (
          pelis.map((peli) => (
            <Card
              key={peli.id}
              style={{
                width: "200px",
                margin: "10px",
                padding: "10px",
                textAlign: "center",
            }}
            >
            <h3>{peli.title}</h3>
              {peli.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
                alt={peli.title}
                width={150}
               />
              ) : (
              <p>Sin imagen</p>
              )}
              <p>{peli.release_date?.slice(0, 4)}</p>
           </Card>
          ))
      ) : (
         !loading && <p>No se encontraron películas</p>
         )}
      </div>
   </div>
  );
}


export default mostrarBusqueda;

