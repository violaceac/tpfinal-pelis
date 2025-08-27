import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import AdbIcon from '@mui/icons-material/Adb';

import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContext } from '../context/FavoriteContext';


function Header() {

  const navigate = useNavigate()

  const { totalFavorites } = useContext(FavoriteContext)

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
          <Box onClick={() => navigate("/")}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
              sx={{ 
                display: { xs: 'block', md: 'none' },
                borderRadius: 0,
            }}
            >
                <Typography onClick={() => navigate("/")} > Home </Typography>
                <Typography onClick={() => navigate("/lanzamientos")} > Ultimos Lanzamientos </Typography>
                <Typography onClick={() => navigate("/populares")} > Populares </Typography>
                <Typography onClick={() => navigate("/buscar")} > Buscar </Typography>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Typography onClick={() => navigate("/")} > Home </Typography>
                <Typography onClick={() => navigate("/lanzamientos")} > Ultimos Lanzamientos </Typography>
                <Typography onClick={() => navigate("/populares")} > Populares </Typography>
                <Typography onClick={() => navigate("/buscar")} > Buscar </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
              <FavoriteIcon color="white" fontSize='medium' onClick={() => navigate("/favoritos")} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;