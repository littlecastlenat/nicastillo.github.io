import * as React from 'react';
import Box from '@mui/material/Box';
import littlecastle from './images/castle.svg' // relative path to image 

import Link from '@mui/material/Link';

import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';

const pages = ['Timeline', 'Github', 'LinkedIn'];


function AppMenuBar() {
  const preventDefault = (event) => event.preventDefault();
  return (
    <Box sx={{ background: "#3e3346", color: 'white', display: { xs: 'flex', md: 'flex' } ,
    alignItems:"center" }}>
      <Box
        sx={{
          my: 2, mx: 1, 
          display: { xs: 'flex', md: 'flex' }
        }}
      />
      
      <Box sx={{
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },

      }}
       
      >
        <Link href="#" underline="hover" color="inherit">
          {'Timeline'}
        </Link>
        <Link href="https://github.com/littlecastlenat" 
              underline="hover" 
              color="inherit" 
              target="_blank"
              rel="noopener">
          {'GitHub'}
        </Link>
        <Link href="https://www.linkedin.com/in/natcastillo/" 
              underline="hover" 
              color="inherit"
              target="_blank"
              rel="noopener">
          LinkedIn
        </Link>
      </Box>


    </Box>



  );
}
export default AppMenuBar;