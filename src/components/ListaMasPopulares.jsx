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

  //aca deberia dejar de hacer ctrl+z
  const handleFavoriteClick = (peli) => {
    if (isFavorite(peli.id)) {
      removeFavorite(peli.id);
    } else{
      addFavorite(peli);
    }
  }

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
            
            <Button onClick={() => handleFavoriteClick(peli)} color={isFavorite(peli.id) ? "error" : "default"}>
              {isFavorite(peli.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>
        </CardActions>
        </Card>         

      ))}
    </Grid>

   
  )
}

export default ListaMasPopulares


