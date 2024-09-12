import logo from './images/compass.svg';

import lifeData from './data/lifedata.json';
import React, { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { StarRateRounded, WorkRounded, SchoolRounded } from '@mui/icons-material';
import LifeEvent from './LifeEvent';
import AppMenuBar from './AppMenuBar';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

import './App.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


//todo aug 19- filter/unfilter based on chips selected

/** Theme Colors
 * Dark - #262329
 * Dark-light - #635D69
 * Grey - #BABABA 
 * Light - #fff
 * OFfwhite - #f8f8ff
 * Dark purple -  #3e3346
 * Accent Purple - #796388
 * Accent purple (2?) - #615B7D
 * 
 * Old colors
 * Darkest purple #262329
 * Light purple #635d69
 * 
*/

function App() {
  let lifeDataEvents = lifeData.events;
  let uniqueDataCategories = lifeDataEvents.map(item => item.category).filter((value, index, self) =>
    self.indexOf(value) === index);
  const [events, setEvents] = useState(lifeDataEvents);
  const [chips, setChips] = useState([true, true, true]);


  useEffect(() => {
    console.log("loaded");
    updateEventsList();
  }, [chips]);

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
        return <SchoolRounded />
      case "work":
        return <WorkRounded />
      default:
        return <StarRateRounded />
    }
  }

  const updateEventsList = () => {
    console.log(chips);
    /**  
     * 1. Filter the uniqueDataCategories array to only contain the categories 
     * which have enabled via the chip component
     * i.e. uniqueDataCat = [school, life, work] should be filtered to 
     * -> [school, life] if the school and life chips have been enabled/clicked
     * the state of a chip is stored in the chips[] variable
     * so the conditional of filter should be on the value of the chips[x] 
     * 
     * 2. Filter events data object array based on whether the 
     * category exists in the previous array */


    let clickedDataCategories = uniqueDataCategories.filter(
      (clickedCategory, clickedCategoryIndex) =>
        chips[clickedCategoryIndex]

    );
    const nextLifeDataEvents = lifeDataEvents.filter((lifeEvent) =>
      clickedDataCategories.includes(lifeEvent.category)
    );
    setEvents(nextLifeDataEvents);

  };

  const handleButtonClick = (clickedIndex) => async () => {
    console.log("before", chips)
    const nextChips = chips.map((item, i) => {

      if (i === clickedIndex) {
        return !chips[i];
      } else {
        return chips[i];
      }
    });

    setChips(nextChips);
    console.log("after", nextChips)
    updateEventsList();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <header>
          <Box sx={{
            backgroundColor: '#796388',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'calc(10 + 2vmin)',
            color: 'white',
            padding: 1
          }}>

            <AppHeader />

          </Box>
        </header>

        <AppMenuBar></AppMenuBar>

        {/**Main Body Container */}
        <Box sx={{
          backgroundColor: '#dfdbe5',
          display: 'flex',
          flexDirection: 'column',
          color: '#615B7D',
          padding: '20px 0 20px 0'
        }}>
          {/** Stack Container with Chips  */}
          <Stack direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            {uniqueDataCategories.map((item, index) =>
              <Chip key={index}
                icon={getICon(uniqueDataCategories[index])}
                color="primary"
                label={uniqueDataCategories[index].charAt(0).toUpperCase() + uniqueDataCategories[index].slice(1)}
                variant={Boolean(chips[index]) ? "contained" : "outlined"}
                onClick={handleButtonClick(index)}
              />
            )}
          </Stack>
          {/**Timeline Container */}
          <Box sx={{
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             flexDirection: 'column'

          }}>
            <Box className="event-list" sx={{
               padding: '10px 10px',
               
            }}>
              {events.map((item, index) =>
                <LifeEvent key={index}
                  details={item}
                  isLast={index === events.length - 1}
                />
              )}
            </Box>
          </Box>
        </Box>
        <AppFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
