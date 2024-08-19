import logo from './images/compass.svg';

import lifeData from './data/lifedata.json';
import React, { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { StarRateRounded, WorkRounded, SchoolRounded} from '@mui/icons-material';
import LifeEvent from './LifeEvent';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


//todo aug 19- filter/unfilter based on chips selected

/** Theme Colors
 * Dark - #262329
 * Dark-light - #635D69
 * Grey - #BABABA 
 * Light - #fff
 * OFfwhite - #f8f8ff
*/
  
function App() {
  let lifeDataEvents = lifeData.events;
  let updatedLifeDataEvents = []
  const [events, setEvents] = useState(lifeDataEvents);
  const [currentWorkVariant, setCurrentWorkVariant] = useState('outlined');
  //const [currentButtonVariant, setCurrentButtonVariant] = useState('');
  const [currentSchoolVariant, setCurrentSchoolVariant] = useState('outlined');
  const [currentLifeVariant, setCurrentLifeVariant] = useState('outlined');

  
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
        main: '#796388',
      },
      secondary: {
        main: '#728863',
      },
    },
    
  });
  
  const updateEventsList = () => {

  };


  
  const handleWorkButtonClick = () => {
    console.info('You clicked the Chip.');
    if (currentWorkVariant === 'outlined') {
      setCurrentWorkVariant('contained');
      //console.log(`before ${lifeDataEvents.length}`);
      lifeDataEvents = lifeDataEvents.filter((event) => event.category != 'work');
      setEvents(lifeDataEvents);
      //console.log(`after ${lifeDataEvents.length}`);
    }
    else {
      setCurrentWorkVariant('outlined');
    }
  };

  const handleLifeButtonClick = () => {
    console.info('You clicked the Chip.');
    if (currentLifeVariant === 'outlined') {
      setCurrentLifeVariant('contained');
      lifeDataEvents = lifeDataEvents.filter((event) => event.category != 'personal');
      setEvents(lifeDataEvents);
    }
    else {
      setCurrentLifeVariant('outlined');
    }
  };

  const handleSchoolButtonClick = () => {
    console.info('You clicked the Chip.');
    if (currentSchoolVariant === 'outlined') {
      setCurrentSchoolVariant('contained');
      lifeDataEvents = lifeDataEvents.filter((event) => event.category != 'personal');
      setEvents(lifeDataEvents);
    }
    else {
      setCurrentSchoolVariant('outlined');
    }
  };


  return (
    <ThemeProvider theme={theme}>
    {<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Main">
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <Chip icon={<StarRateRounded/>} 
                label="Life" 
                variant={currentLifeVariant}
                color="primary"
                onClick={handleLifeButtonClick} 
          />
          <Chip icon={<WorkRounded/>} 
                label="Work" 
                variant={currentWorkVariant}
                color="primary"
                onClick={handleWorkButtonClick} 
          />
          <Chip icon={<SchoolRounded/>} 
                label="School" 
                variant={currentSchoolVariant}
                color="primary"
                onClick={handleSchoolButtonClick} 
          />
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
