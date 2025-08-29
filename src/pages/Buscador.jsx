import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router';
import usePeliculas from "../hooks/usePeliculas";
import { FavoriteContext } from '../context/FavoriteContext';

import { Button, Card, CardContent, CardMedia, IconButton, Input, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


function mostrarBusqueda() {
  const { pelis, loading, error, buscarPeliculas } = usePeliculas();
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const { isFavorite, handleFavoriteClick } = useContext(FavoriteContext);
  const navigate = useNavigate();


  // cada vez que cambia el search, hago la búsqueda
  useEffect(() => {
    buscarPeliculas(textoBusqueda);
  }, [textoBusqueda]);


  const manejarCambioDeBusqueda = (event) => {
    setTextoBusqueda(event.target.value);
  };


  return (
    <div>
      <Typography
      sx={{
        fontSize: '25px', 
        margin:'10px',
        fontWeight: 'bold'
         }}
      >
        Buscador de Películas</Typography>
     
        <Input
          type="text"
          placeholder="Buscar películas..."
          value={textoBusqueda}
          onChange={manejarCambioDeBusqueda}
          
          sx={{
            border: '1px solid',
            borderColor: 'primary.main',
            borderRadius: 1,
            padding: '8px 12px',
            margin:'5px',
            width: '300px',
            '&:focus': {
            borderColor: 'primary.dark',
            boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
            }
          }}
        />
      


    {loading && <p>Cargando...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}

     <div className="movie-list" style={{ display: "flex", flexWrap: "wrap" }}>
        {!loading && pelis.length > 0 ? (
          pelis.map((peli) => (
             <Card key={peli.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                  width: "90px",
                  borderRadius: '0 !important',
                  margin:'5px'

                }}
              >
                {/* Imagen */}
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w300${peli.poster_path}`}
                  alt={peli.title}
                  sx={{
                    height: { xs: 220, sm: 280, md: 300 },
                    objectFit: "cover",
                    cursor: "pointer",
                    borderRadius: '0 !important'
                  }}
                  onClick={() => navigate(`/pelicula/${peli.id}`)}
                 
                />
              

                <Button onClick={() => handleFavoriteClick(peli)} color={isFavorite(peli.id) ? "error" : "default"}>
              {isFavorite(peli.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>

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