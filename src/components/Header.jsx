import { useState } from 'react';
import { useNavigate } from 'react-router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';



import FavoriteIcon from "@mui/icons-material/Favorite";

import { Button, MenuItem } from '@mui/material';


function Header() {

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
;

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar
    position="static"
    sx={{
      bgcolor: '#1a237e'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* LOGO Y TITULO DEL HEADER/PAGINA */}
          <Box onClick={() => navigate("/")}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >

            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              AdaMovie
            </Typography>
          </Box>

              {/* Esto es mobile y menu hamburguesa */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              // keepMounted
              // transformOrigin={{
              //   vertical: 'top',
              //   horizontal: 'left',
              // }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
              sx={{ 
                display: { xs: 'block', md: 'none' },
                borderRadius: '0 !important',
            }}
            >
              <MenuItem onClick={() => navigate("/")} > Home </MenuItem>
              <MenuItem onClick={() => navigate("/lanzamientos")} >Ultimos Lanzamientos</MenuItem>
              <MenuItem onClick={() => navigate("/populares")} >Populares</MenuItem>
              <MenuItem onClick={() => navigate("/buscar")} > Buscar </MenuItem>
      
            </Menu>
          </Box>


          {/* TITULO DE LA PAGINA */}
          <Typography
            variant="h5"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AdaMovie
          </Typography>


          {/* ESTO SERIA EN ESCRITORIO */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            gap: 2, // Espacio entre botones
            ml: 3   // Margen izquierdo
          }}>
            <Button 
              color="inherit" 
              onClick={() => navigate("/")}
              sx={{ 
                fontWeight: 'bold',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate("/lanzamientos")}
              sx={{ 
                fontWeight: 'bold',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Últimos Lanzamientos
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate("/populares")}
              sx={{ 
                fontWeight: 'bold',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Populares
            </Button>
            <Button 
              color="inherit" 
              onClick={() => navigate("/buscar")}
              sx={{ 
                fontWeight: 'bold',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Buscar
            </Button>
          </Box>

          {/* icono favoritos */}
          <Box sx={{ flexGrow: 0 }}>
              <FavoriteIcon color="white" fontSize='medium' onClick={() => navigate("/favoritos")} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

