import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <Box 
      sx={{
      bgcolor: '#1a237e'
    }}
    >
        <Typography
            sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
            }}
        >AdaMovie</Typography>
    </Box>
  )
}

export default Footer

