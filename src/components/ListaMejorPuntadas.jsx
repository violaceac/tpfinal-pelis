import { useEffect } from 'react'
import usePeliculas from "../hooks/usePeliculas"

import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  List,
  ListItem
} from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


function ListaMejorPuntadas() {

   const { pelis, obtenerPeliculas } = usePeliculas();
   const navigate = useNavigate();
   const { isFavorite, handleFavoriteClick } = useContext(FavoriteContext);

useEffect(() => {
  
  obtenerPeliculas("top_rated")
}, []);

  return (
    <Box sx={{
      width:'280px',
      height: '400px',
      overflow: 'auto',
    }}>

      {/* titulo del contenedor */}
      <Typography 
            sx={{
          position: 'sticky',
          top: 0,               
          zIndex: 10,        
          backgroundColor: 'background.paper', 
          paddingY: 1,              
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
        variant="h5" 
        fontWeight="bold" 
        color="primary" 
        gutterBottom>
          Mas Populares 
      </Typography>

      {/* lista de pelis map y card para cada peli */}
      <List sx={{ padding: 0 }}>
        {pelis.map((peli) => (
          <ListItem key={peli.id} sx={{ padding: '8px 0' }}>

            {/* card peli imagen + data */}
            <Card sx={{ 
              display: 'flex', 
              width: '100%', 
              minHeight: 120, 
              borderRadius: 1,
              boxShadow: 2,
              }}>

              {/* imagen */}
              <CardMedia
                component="img"
                sx={{ 
                  width: 80, 
                  height: 120, 
                  objectFit: 'cover',
                  flexShrink: 0 
                }}
                image={`https://image.tmdb.org/t/p/w1280${peli.poster_path}`}
                alt={peli.title}
              />
      
              {/* boton ver pelicula + año y titulo */}
              <CardContent sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                padding: '12px !important',
                flexGrow: 1, 
                minWidth: 0 
              }}>

                 {/* año y titulo */}
                 <Box>
                    {/* titulo */}
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        lineHeight: 1.2,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        mb: 1
                    }}>
                      {peli.title}
                    </Typography>
          
                    {/* año */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {new Date(peli.release_date).getFullYear()}
                    </Typography>
                    </Box>
                 </Box>
        
                {/* boton ver pelicula */}
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<PlayArrow />}
                 sx={{
                   alignSelf: 'flex-start',
                   fontSize: '0.75rem',
                   padding: '4px 12px',
                  borderRadius: 1
                  }}
                  onClick={() => navigate(`/pelicula/${peli.id}`)}
                >
                   Ver 
                </Button>
              </CardContent>

              <CardActions>
                <Button onClick={() => handleFavoriteClick(peli)} color={isFavorite(peli.id) ? "error" : "default"}>
                  {isFavorite(peli.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ListaMejorPuntadas

