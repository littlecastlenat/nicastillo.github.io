import logo from './images/compass.svg';

import lifeData from './data/lifedata.json';
import React, { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { StarRateRounded, WorkRounded, SchoolRounded} from '@material-ui/icons';
import LifeEvent from './LifeEvent';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

/** Theme Colors
 * Dark - #262329
 * Dark-light - #635D69
 * Grey - #BABABA 
 * Light - #fff
 * OFfwhite - #f8f8ff
*/

function App() {
  let lifeDataEvents = lifeData.events;
  const [events] = useState(lifeDataEvents);
  
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${events} times`;
  });

  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
  
  return (

    <ThemeProvider theme={theme}>
    {<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Main">
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <Chip icon={<StarRateRounded/>} label="Chip Outlined" variant="outlined" />
          <Chip icon={<WorkRounded/>} label="Chip Outlined" variant="outlined" />
          <Chip icon={<SchoolRounded/>} label="Chip Outlined" />
        </Stack>
        <div className="LifePathWrapper">
          <div className="event-list">
            {events.map((item,index) => <LifeEvent key={index} details={item} />)}
            </div>
        </div>
      </div>
    </div>}
  
    </ThemeProvider>
  );
}


//Icon by <a href="https://freeicons.io/profile/3">freeicons</a> on <a href="https://freeicons.io">freeicons.io</a>
    
export default App;
