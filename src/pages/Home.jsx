import Slider from "../components/Slider"
import ListaMasPopulares from "../components/ListaMasPopulares"
import ListaMejorPuntadas from "../components/ListaMejorPuntadas"

import { Box } from "@mui/material"

function Home() {

  return (
   <Box
      sx={{
        maxWidth: "1200px",       
        margin: "0 auto",         
        padding: { 
          xs: "16px",            
          sm: "24px",              
          md: "32px"             
        },
        display: "flex",
        flexDirection: "column",
        gap: { 
          xs: 3,                 
          md: 4                  
        }
      }}
    >
      <Slider />
      
      {/* CONTENEDOR PARA LOS DOS COMPONENTES */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { 
            xs: 'column',  // Mobile: vertical
            sm: 'row',  // Tablet: vertical  
            md: 'row'      // Desktop: horizontal
          },
          gap: { 
            xs: 3,
            sm: 4,         // Mobile: 24px entre componentes
            md: 4          // Desktop: 32px entre componentes
          },
          alignItems: 'stretch' // ← Que ambos tengan la misma altura
        }}
      >
        {/* PRIMER COMPONENTE - 50% ancho en desktop */}
        <Box sx={{ 
          flex: { 
            xs: 'none',    // Mobile: ancho completo
            sm: 1,
            md: 1          // Desktop: ocupa 1 parte del espacio
          },
          width: { 
            xs: '100%',    // Mobile: 100% ancho
            sm:'auto',
            md: 'auto'     // Desktop: ancho automático
          }
        }}>
          <ListaMasPopulares />
        </Box>

        {/* SEGUNDO COMPONENTE - 50% ancho en desktop */}
        <Box sx={{ 
          flex: { 
            xs: 'none',    // Mobile: ancho completo
            sm:1,
            md: 1          // Desktop: ocupa 1 parte del espacio
          },
          width: { 
            xs: '100%',    // Mobile: 100% ancho
            sm:'auto',
            md: 'auto'     // Desktop: ancho automático
          }
        }}>
          <ListaMejorPuntadas />
        </Box>
      </Box>
    </Box>
  )
}

export default Home

