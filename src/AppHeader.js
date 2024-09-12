import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, keyframes } from '@mui/material';
import littlecastle from './images/castle.svg'; // relative path to image 

function AppHeader() {
    const name = "Natalia Castillo";

    // Define keyframes using MUI keyframes utility
    const moveText = keyframes`
        0% { transform: translateY(100%); opacity: 1; }
        50% { transform: translateY(-10%); }
        100% { transform: translateY(0); opacity: 1; }
    `;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column', // Arrange items vertically
                alignItems: 'center',    // Center horizontally
                mt: 3,
                mx: 1,
            }}
        >
            <Box
                component="img"
                sx={{
                    height: 80,
                    width: 80,
                    display: { xs: 'none', md: 'flex' },
                }}
                alt="Castle"
                src={littlecastle}
            />
            <Box>
                {name.split("").map(function (char, index) {
                    return (
                        <Typography
                            sx={{
                                display: "inline-block", // Ensures inline-block for spacing control
                                position: "relative",
                                animation: `${moveText} 0.75s forwards`,
                                animationDelay: `${0.5 + index / 10}s`,
                                opacity: 0, // Initial opacity before animation starts
                                my: 1, // Adds margin between image and text
                            }}
                            variant="h4"
                            aria-hidden="true"
                            key={index}
                        >
                            {char === " " ? "\u00A0" : char}
                        </Typography>
                    );
                })}
                <Typography sx={{ 
                    animation: `${moveText} 0.75s forwards`, 
                    position: "relative", 
                    display: "inline-block" }}>
                        _
                </Typography>
            </Box>
        </Box>
    );
}

export default AppHeader;
