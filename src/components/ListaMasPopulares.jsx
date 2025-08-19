import { useEffect } from 'react'
import usePelis from "../hooks/usePelis"

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';


import { 
  Button, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Card, 
  Typography, 
  Grid,
  Box,
  IconButton
} from '@mui/material';

function ListaMasPopulares() {

  const { pelis, obtenerPelis } = usePelis();
  const navigate = useNavigate()
  const { addFavorite, isFavorite, removeFavorite } = useContext(FavoriteContext);

  useEffect(() => {
  
    obtenerPelis("popular")
  }, []);

  return (

   <Grid> 
      {pelis.map((peli) => (
        <Card key={peli.id} sx={{ maxWidth: 345 }} >
          <CardMedia
          key={peli.id}
          component="img"
          alt={peli.title}
          height="200"
          image={`https://image.tmdb.org/t/p/w500${peli.backdrop_path}`} />
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {peli.title}
            </Typography>
        </CardContent>
          <CardActions>
            {/* <Button size="medium" onClick={() => navigate(`/detail/${id}`)}>Ver Detalle</Button> */}

      {isFavorite(peli.id) ? (
          <Button onClick={() => removeFavorite(peli.id)}>
            <FavoriteIcon /> {/* corazon lleno */}
          </Button>
        ) : (
          <Button onClick={() => addFavorite(peli)}>
            <FavoriteBorderIcon />
          </Button>
        )}
        </CardActions>
        </Card>         

      ))}
    </Grid>

   
  )
}

export default ListaMasPopulares


{/* <Grid>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {marca} - {modelo}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {descripcion}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Precio: ${precio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={() => navigate(`/detail/${id}`)}>Ver Detalle</Button>
          <Button size="large" onClick={() => cartContext.addToCart({id, img, categoria, descripcion, marca, modelo, precio, stock}, 1)}>Agregar al carrito</Button>

          <IconButton onClick={() => {
            toogleFavorite({id, img, categoria, descripcion, marca, modelo, precio, stock})
          }} aria-label="Agregar a favoritos">
            { existInFavorite(id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon color="white" /> }
          </IconButton>
        </CardActions>
      </Card>
    </Grid> */}



// lo siguiente es un navigate simple en una card de personajes en el proyecto de star wars

// import { useNavigate } from "react-router"

// export default function Card({id, name, image}) {
//   const navigate = useNavigate()

//   return (
//     <div onClick={() => navigate(`/characters/${id}`)} >
//       <img src={image} style={{width: '200px'}} />
//       <p>{name}</p>
//     </div>
//   )
// }