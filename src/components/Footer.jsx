import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <Box 
      sx={{
      bgcolor: '#0f0f1b',
      height:'50px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }}
    >
        <Typography
            sx={{
                mr: 2,
                fontFamily: 'roboto',
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
            }}
        >AdaMovie</Typography>
    </Box>
  )
}


export default Footer

