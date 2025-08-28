import { useEffect, useState } from 'react' 
import { useParams } from "react-router"
import usePeliculas from '../hooks/usePeliculas'

import { Button, Typography, CircularProgress, Box, Modal, IconButton, Grid, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";


export default function DetallePelicula() {
 
 const {id} = useParams();
 const {
   peliculaDetalle,
   obtenerDetallePelicula,
   loading,
   error,
  } = usePeliculas();
  const [openTrailer, setOpenTrailer] = useState(false);


useEffect (()=>{
  console.log('ID de la película:', id);
  obtenerDetallePelicula(id);
  console.log("hols")
  }
,[id])


useEffect(() => {
  if (peliculaDetalle) {
    console.log('Datos completos de la película:', peliculaDetalle);
    console.log('Videos disponibles:', peliculaDetalle.videos);
    console.log('Results de videos:', peliculaDetalle.videos?.results);
  }
}, [peliculaDetalle]);


//si esta cargando , muestra cargando . 17/8
if(loading) {
   return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: peliculaDetalle?.poster_path
          ? `url(https://image.tmdb.org/t/p/original${peliculaDetalle.poster_path})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", // capa oscura para visibilidad del spinner
        },
      }}
    >
      <CircularProgress
        color="primary"
        sx={{
          position: "relative",
          zIndex: 1, // por encima de la capa oscura
        }}
      />
    </Box>
  );
}

// Paso 2: Muestra el estado de error
if (error) {
   return <Typography color="error">Error: {error}</Typography>;
}

// Si no se encontró la película después de la carga, muestra un mensaje. 17/8 // 

 if (!peliculaDetalle) {
   return <Typography>No se pudo encontrar la película.</Typography>;
}


const trailer = peliculaDetalle.videos?.results?.find(
   (v) => v.type === "Trailer" && v.site === "YouTube"
  );




const trailerUrl = trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
console.log(trailerUrl);


return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${peliculaDetalle.backdrop_path || peliculaDetalle.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 0,
        },
        p: { xs: 2, md: 4 }, // Padding responsivo
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{
          maxWidth: "1200px",
          width: "100%",
          zIndex: 1,
          alignItems: "center",
          justifyContent: { xs: 'center', sm: 'flex-start' },
        }}
      >
        {/* Póster de la película. Ocupa 12 columnas en móviles y 4 en tablets y desktops. */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${peliculaDetalle.poster_path || 'https://via.placeholder.com/500x750?text=No+Poster'}`}
              alt={peliculaDetalle.title}
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "12px",
                height: "auto",
              }}
            />
          </Box>
        </Grid>

        {/* Contenido de la película */}
        <Grid item xs={12} sm={8}>
          <Stack
            spacing={2}
            sx={{
              textAlign: { xs: "center", sm: "left" },
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            {/* Título de la película */}
            <Typography variant="h3" color="primary" gutterBottom>
              {peliculaDetalle.title}
            </Typography>

            {/* Descripción */}
            <Typography variant="body1" sx={{ mb: 2 }}>
              {peliculaDetalle.overview}
            </Typography>

            {/* Género */}
            <Typography variant="subtitle1" gutterBottom>
              <strong>Géneros:</strong>{" "}
              {peliculaDetalle.genres?.map((g) => g.name).join(", ")}
            </Typography>

            {/* Botón de ver trailer */}
            {trailerUrl && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpenTrailer(true)}
                sx={{ mt: 2 }}
              >
                Ver Trailer
              </Button>
            )}
          </Stack>
        </Grid>
      </Grid>

      {/* Modal del trailer */}
      {trailerUrl && (
        <Modal open={openTrailer} onClose={() => setOpenTrailer(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 2,
              borderRadius: 2,
              width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
              maxWidth: 800,
              outline: "none",
            }}
          >
            <IconButton
              onClick={() => setOpenTrailer(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "grey.700",
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%',
                height: 0,
                overflow: 'hidden',
              }}
            >  
              <MediaController
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 2,
                }}
              >
              <ReactPlayer
                slot='media'
                src={trailerUrl}
                width="100%"
                height="100%"
                controls={false} // Desactivamos los controles por defecto
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  "--controls": "none",
                }}
              />
              
                <MediaControlBar>
                  <MediaPlayButton></MediaPlayButton>
                  <MediaSeekBackwardButton></MediaSeekBackwardButton>
                  <MediaSeekForwardButton></MediaSeekForwardButton>
                  <MediaTimeRange></MediaTimeRange>
                  <MediaTimeDisplay showDuration></MediaTimeDisplay>
                  <MediaMuteButton></MediaMuteButton>
                  <MediaVolumeRange></MediaVolumeRange>
                  <MediaFullscreenButton></MediaFullscreenButton>
                </MediaControlBar>
              </MediaController> 
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );

}



