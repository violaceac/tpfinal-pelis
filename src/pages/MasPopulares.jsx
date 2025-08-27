import { useEffect } from "react";

import usePeliculas from "../hooks/usePeliculas";
import { useNavigate } from "react-router";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Pagination,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MasPopulares() {
  const navigate = useNavigate();

  const {
    obtenerPeliculas,
    pelis,
    pagina,
    paginaAnterior,
    paginaSiguiente,
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
              item
              xs={6}  // 2 cards por fila en mobile
              sm={4}  // 3 cards en tablet
              md={3}  // 4 cards en desktop
              lg={2}  // 6 cards en desktop grande
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
                  onClick={() => navigate(`/pelicula/${peli.id}`)}
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

                  <IconButton onClick={() => toggleFavorito(peli.id)} size="small">
                    <FavoriteIcon
                      sx={{
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                        color: esFavorito ? "secondary.main" : "text.secondary",
                      }}
                    />
                  </IconButton>
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
            if (value > pagina) paginaSiguiente();
            else paginaAnterior();
          }}
          color="primary"
          size="medium"
          sx={{ mt: 1 }}
        />
      </Box>
    </>
  );
}









