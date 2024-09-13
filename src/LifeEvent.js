import React from 'react';
import { Modal, Box, Typography, IconButton, Stack, createTheme } from '@mui/material';
import { StarRateRounded, LaptopMacRounded, SchoolRounded } from '@mui/icons-material';

const LifeEvent = ({ details, isLast }) => {
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
    // Function to calculate modal position
    const getModalStyle = () => {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    // State hooks
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    // Handlers for opening and closing the modal
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Function to get the correct icon based on the event type
    const getIcon = (eventType) => {
        switch (eventType) {
            case 'school':
                return <SchoolRounded sx={{ color: '#dfdbe5' }} />;
            case 'work':
                return <LaptopMacRounded sx={{ color: '#dfdbe5' }} />;
            default:
                return <StarRateRounded sx={{ color: '#dfdbe5' }} />;
        }
    };

    const dateFormat = (startDate, endDate) => {
        const startDateFormat = new Date(startDate);
        const endDateFormat = new Date(endDate);

        if (startDateFormat.getFullYear() === endDateFormat.getFullYear()){
            return startDateFormat.getFullYear();
        }
        else {
            return `${startDateFormat.getFullYear()} - ${endDateFormat.getFullYear()} `;
        }
    };

    // Modal body content
    const modalBody = (
        <Box
            sx={{
                position: 'absolute',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 3,
                ...modalStyle,
            }}
        >
            <Typography variant="h6" id="simple-modal-title">
                {details.title}
            </Typography>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' }}>
                <img src={details.imagePath} alt={details.title} style={{ maxWidth: '100%' }} />
                <Typography id="simple-modal-description" sx={{ mt: 2 }}>
                    {details.description}
                </Typography>
                <Typography sx={{ mt: 1, color: 'gray' }}>Next</Typography>
            </Box>
        </Box>
    );

    /* Life Event Wrapper Contains Icon and Typography */
    return (
        <Box sx={{ 
            padding: '10px 0',   
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            left: '40%',
            label:"LifeEventWrapper" 
        }}>
            {/* Conditionally render lifeline if it's not the last event */}
            <Box
                sx={{
                    height: '100px',
                    backgroundColor: '#796388',
                    borderLeft: '3px solid #796388',
                    height: '65%',
                    position: 'absolute',
                    left: '2%',
                    top: 35,
                    display: isLast ? 'none' : 'inline-block'
                    
                }}
                />

            
            <Box direction="row" 
                    spacing={1}
                    justifyContent={'flex-start'} 
                    sx={{
                        alignItems:"center",
                        ml:'1',
                        
                        
                        
                    }}
            >
                {/* Icon button */}
            <IconButton
                size="small"
                onClick={handleOpen}
                color="primary"
                sx={{

                    backgroundColor: '#796388',
                    '&:hover': { backgroundColor: '#615B7D' },
                    position: 'relative',
                    
                }}
            >
                {getIcon(details.category)}
            </IconButton>

            {/* Title */}
            <Typography
                onClick={handleOpen}
                sx={{
                    cursor: 'pointer',
                    display: 'inline',
                    mt: 1,
                    ml: 1,
                    textAlign: 'center',
                    color: '#796388',
                }}
            >
                {dateFormat(details.startDate,details.endDate)} : {details.title}
            </Typography>
            </Box>
            {/* Modal replace open with open variable*/}
            <Modal
                open={undefined}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {modalBody}
            </Modal>
        </Box>
    );
};

export default LifeEvent;
