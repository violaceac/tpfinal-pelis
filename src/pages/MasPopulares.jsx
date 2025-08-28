import { useEffect, useState } from 'react'
import usePeliculas from "../hooks/usePeliculas"

import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Pagination,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MasPopulares() {
  const navigate = useNavigate();
  const { isFavorite, handleFavoriteClick } = useContext(FavoriteContext)

  const {
    obtenerPeliculas,
    pelis,
    pagina,
    irAPagina,
    totalPaginas,
  } = usePeliculas();

  const [favoritos, setFavoritos] = useState([]);

  function toggleFavorito(id) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  }

  useEffect(() => {
    obtenerPeliculas("popular");
  }, [pagina]);

  return (
    <>
      {/* Título principal */}
      <Typography
        variant="h2"
        sx={{
          mb: 3,
          textAlign: "center",
          fontSize: { xs: "1.4rem", md: "1.8rem" },
        }}
      >
        Más Populares
      </Typography>

      {/* GRID mobile-first */}
      <Grid
        container
        spacing={5} // espacio entre cards
        sx={{
          px: { xs: 5, sm: 4, md: 6 },
          py: 2,
        }}
      >
        {pelis.map((peli) => {
          const esFavorito = favoritos.includes(peli.id);

          return (
            <Grid
              size={{xs:6, sm:4, md:3, lg:2}}
              key={peli.id}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%", // ocupa todo el Grid item
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
                  }}
                  onClick={() => navigate(`/pelicula/:${peli.id}`)}
                 
                />

                {/* Título + corazón */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Typography variant="body1" align="center" sx={{ fontWeight: 500 }}>
                    {peli.title}
                  </Typography>

                  <Button onClick={() => handleFavoriteClick(peli)} color={isFavorite(peli.id) ? "error" : "default"}>
                    {isFavorite(peli.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Paginación */}
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >

        <Pagination
            count={totalPaginas}
            page={pagina}
            onChange={(e, value) => {
            irAPagina(value); 
            }}

          color="primary"
          size="medium"
          sx={{ mt: 1 }}

           boundaryCount={1} 
           siblingCount={1}   
           showFirstButton     
           showLastButton      
        />
      </Box>
    </>
  );
}