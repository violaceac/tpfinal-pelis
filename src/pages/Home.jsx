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
            xs: 'column',  
            sm: 'row',   
            md: 'row'      
          },
          gap: { 
            xs: 3,
            sm: 4,       
            md: 4         
          },
          alignItems: 'stretch' 
        }}
      >
        {/* componente mas populares */}
        <Box sx={{ 
          flex: { 
            xs: 'none',
            sm: 1,
            md: 1       
          },
          width: { 
            xs: '100%',   
            sm:'auto',
            md: 'auto'     
          }
        }}>
          <ListaMasPopulares />
        </Box>

        {/* componente mejorpuntadas */}
        <Box sx={{ 
          flex: { 
            xs: 'none',    
            sm:1,
            md: 1          
          },
          width: { 
            xs: '100%', 
            sm:'auto',
            md: 'auto'     
          }
        }}>
          <ListaMejorPuntadas />
        </Box>
      </Box>
    </Box>
  )
}

export default Home

