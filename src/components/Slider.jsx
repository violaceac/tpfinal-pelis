import { useEffect } from 'react';
import usePeliculas from "../hooks/usePeliculas";
import { useNavigate } from 'react-router';

import { Card, CardMedia, Typography, Box } from '@mui/material';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




function Slider() {

  const { pelis, obtenerPeliculas } = usePeliculas();
  const navigate = useNavigate();

useEffect(() => {
  
  obtenerPeliculas("now_playing")
}, []);

  return (

    <Carousel
      showArrows={true}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={false}
      showIndicators={false} 
      showThumbs={false} 
      swipeable={true}
      emulateTouch={true} 
    >
      {pelis.map((peli) => (
    <Card key={peli.id} sx={{ 
      position: 'relative', 
      maxWidth: 300, 
      height: 200,
      margin: '0 auto',
      paddingTop: 1,
      borderRadius: 0,
      boxShadow: 3
    }}
    onClick={() => navigate(`/pelicula/${peli.id}`)}
    >

      <CardMedia
        component="img"
        height="200"
        image={`https://image.tmdb.org/t/p/w1280${peli.backdrop_path}`}
        alt={peli.title}
        sx={{ objectFit: 'cover' }}
      />
      
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
        padding: 1,
        color: 'white'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            
          }}
        >
          {peli.title}
        </Typography>
      </Box>
    </Card>
      ))}
    </Carousel>


  );

}

export default Slider

