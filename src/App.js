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
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';


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
  let uniqueDataCategories = lifeDataEvents.map(item => item.category).filter((value, index, self) =>
    self.indexOf(value) === index);
  let updatedLifeDataEvents = []
  const [events, setEvents] = useState(lifeDataEvents);
  const [currentWorkVariant, setCurrentWorkVariant] = useState('contained');
  //const [currentButtonVariant, setCurrentButtonVariant] = useState('');
  const [currentSchoolVariant, setCurrentSchoolVariant] = useState('contained');
  const [currentVariant, setCurrentVariant] = useState('contained');
  const [chipVariants, setChipVariants] = useState({});
  const [clicked, setClicked] = useState(true);
  //const [clickedChip, clickedChip] = useState(0);
  const [chips, setChips] = useState([false, false, false]);
    


  
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
    // chip: {
    //   margin: theme.spacing(0.5),
    //   "& .MuiChip-deleteIcon": {
    //     display: "none"
    //   },
    //   "&:hover": {
    //     "& .MuiChip-deleteIcon": {
    //       display: "block"
    //     }
    //   }
    // },
    
  });
  const getICon = (item) => {
    switch (item) {
        case "school":
            return <SchoolRounded/> 

        case "work":
            return <WorkRounded/>
        default:
            return <StarRateRounded/>

    }
  }

  const updateDeleteIcon = () => {
    console.log(clicked);
    if (clicked === true){
      console.log("here")
      setClicked(!clicked)
      return null;
      
    } else {
      //setClicked(!clicked);
    }
  };

  const updateEventsList = () => {
      lifeDataEvents = lifeDataEvents.filter((event) => event.category !== 'work');
      setEvents(lifeDataEvents);
  };


  // In order to filter data
  // start with original data json object
  // 
  // filter the ones that are
  
  const handleLifeButtonClick = () => {
    if (currentVariant === 'outlined') {
      setCurrentVariant('contained');
      lifeDataEvents = lifeDataEvents.filter((event) => event.category !== 'personal');
      setEvents(lifeDataEvents);
      updateDeleteIcon();
    }
    else {
      setCurrentVariant('outlined');
      updateDeleteIcon();
    }
  };

  const handleButtonClick = (index) => () => {
    console.info('You clicked the Chip.');
    //console.log(index, chips[index], chips);
    const nextChips = chips.map((i) => {
      console.log("entered map", i, index);
        if (i === index) {
          console.log("i === index", i, index);
          // Increment the clicked counter
          return !chips[i];
        } else {
          console.log("else", i, index);
          // The rest haven't changed
          return chips[i];
        }
      });
      setChips(nextChips);
    //setClicked(!clicked);
    //onsole.log(index);
    // if (currentVariant === 'outlined') {
    //   setCurrentVariant('contained');
    //   lifeDataEvents = lifeDataEvents.filter((event) => event.category !== 'personal');
    //   setEvents(lifeDataEvents);
    //   updateDeleteIcon();
    // }
    // else {
    //   setCurrentVariant('outlined');
    //   updateDeleteIcon();
    // }
  };


  const handleSchoolButtonClick = () => {
    console.info('You clicked the Chip.');
    if (currentSchoolVariant === 'outlined') {
      setCurrentSchoolVariant('contained');
      lifeDataEvents = lifeDataEvents.filter((event) => event.category !== 'personal');
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
        {uniqueDataCategories.map((item,index) => <Chip key={index} 
                                          icon={getICon(uniqueDataCategories[index])}
                                          color="primary" 
                                          label={uniqueDataCategories[index].charAt(0).toUpperCase() + uniqueDataCategories[index].slice(1)} 
                                          variant={chips[index] ? "contained" : "outlined"} 
                                          onClick={handleButtonClick(index)}
                                    />)}

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
