import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton
} from '@mui/material';

import { useNavigate } from 'react-router';

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


function PelisFavoritas() {

  const { allFavorites, handleFavoriteClick, isFavorite } = useContext(FavoriteContext);
  const navigate = useNavigate();

  if (allFavorites.length === 0) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '50vh',
        padding: 3
      }}>
        <Typography variant="h4" gutterBottom>
          No tenés películas favoritas
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Agregá películas a favoritos para verlas aquí
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/')}
          sx={{ mt: 2 }}
        >
          Explorar Películas
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        Tus Películas Favoritas ({allFavorites.length})
      </Typography>

      <Grid container spacing={0}>
        {allFavorites.map((peli) => (
          <Grid key={peli.id} size={{xs:12, sm:6, md:4, lg:3}}>
            <Card sx={{ 
              width:'250px', 
              display: 'flex', 
              flexDirection: 'column',
              position: 'relative',
              borderRadius: '0 !important',
              height: {
                xs: '250px',  
                sm: '280px', 
                md: '300px',  
                lg: '320px' 
              },
              width: {
                xs: '230px', 
                sm: '250px',  
                md: '280px',  
                lg: '300px'   
              }
            }}>

              {/* Botón de handleFavorite favorito */}
              <Button 
                  sx={{
                  position: 'absolute',
                  top: 120,
                  right: -10,
                  zIndex: 10,
                  }}
                onClick={() => handleFavoriteClick(peli)} color={isFavorite(peli.id) ? "error" : "default"}>
               {isFavorite(peli.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </Button>

              <CardMedia
                component="img"
                height="200"
                image={`https://image.tmdb.org/t/p/w500${peli.backdrop_path}`}
                alt={peli.title}
                sx={{ objectFit: 'cover' }}
                onClick={() => navigate(`/pelicula/${peli.id}`)}
              />
              
              <CardContent sx={{ 
                height:'100px',
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'left',
                padding: '5px',
               
                 }}>

                  <Typography variant="h6" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {peli.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {new Date(peli.release_date).getFullYear()}
                  </Typography> 

              </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PelisFavoritas;

