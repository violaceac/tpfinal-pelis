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
      maxWidth: '100%', 
      height: {
        xs: 200,  
        sm: 300,    
        md: 400,  
        lg: 500   
      },
      margin: '0 auto',
      paddingTop: 1,
      borderRadius: 0,
      boxShadow: 3,
      overflow: 'hidden'
    }}
    onClick={() => navigate(`/pelicula/${peli.id}`)}
    >
{/* 
            sx={{ 
                display: { xs: 'block', md: 'none' },
                borderRadius: '0 !important',
            }} */}

      <CardMedia
        component="img"
        
        image={`https://image.tmdb.org/t/p/w1280${peli.backdrop_path}`}
        alt={peli.title}
        sx={{ objectFit: 'cover',
          height: '100%',
         }}
      />
      
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
        padding: {
          xs: 1,  
          md: 2     
        },
        color: 'white'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: {
              xs: '0.9rem',  
              sm: '1.5rem',  
              md: '2.5rem', 
              lg: '3rem'   
            }
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

