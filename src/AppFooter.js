import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

function AppFooter() {
  return (
    <Box 
      sx={{
        background: "#3e3346",
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80', // Adjust height as needed
        padding: 2, // Optional padding
        position: 'sticky',
        bottom: 0,
            
      }}
    >
      <Typography>© Natalia Castillo</Typography>
      <Link 
        color='#fff'
        href="https://www.flaticon.com/free-icons/castle" 
        title="fortress icons"
        underline='always'
        target='_blank'
        sx={{ mt: 1 }} // Margin-top for spacing between text and link
      >
        Castle icon created by Freepik - Flaticon
      </Link>
    </Box>
  );
}

export default AppFooter;
