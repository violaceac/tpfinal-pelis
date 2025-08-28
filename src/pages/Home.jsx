import Slider from "../components/Slider"
import ListaMasPopulares from "../components/ListaMasPopulares"
import ListaMejorPuntadas from "../components/ListaMejorPuntadas"

import { Box } from "@mui/material"

function Home() {

  return (
    <>

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
        <ListaMasPopulares />
        <ListaMejorPuntadas />
      </Box>
    </>
  )
}

export default Home


