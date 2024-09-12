import React from 'react';
import {Modal} from '@material-ui/core';
import { StarRateRounded, WorkRounded, SchoolRounded} from '@material-ui/icons';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import './LifeEvent.css';


//todo update this whole mess to NOT use style components and just use native MUI


const LifeEvent = (props) => {
    function getModalStyle() {
        const top = 50;
        const left = 50;
      
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const StyledButton = withStyles({
        root: {
          background: '#796388',
          '&:hover': {
            background: "#615B7D",
         },
        },
        label: {
          textTransform: 'capitalize',
        },
      })(IconButton);
 
    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
        small: {
            width: 30,
            height: 30,
        }
    }));
        
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getICon = (eventType) => {
        switch (eventType) {
            
            case "school":
                return <SchoolRounded style={{ color: "#dfdbe5" }}></SchoolRounded>;

            case "work":
                return <WorkRounded style={{ color: "#dfdbe5" }}></WorkRounded>;
            default:
                return <StarRateRounded style={{ color: "#dfdbe5" }}></StarRateRounded>;

        }
    }

    const modalBody = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{props.details.title}</h2>
          <div className="modalWrapper">
            <img src={props.details.imagePath} alt={props.details.title}/>
            <p id="simple-modal-description">
            {props.details.description}
            </p>
            <span>Next</span>
          </div>
        </div>
      );
    return (
        <div className="event">
            <div className="event-lifeline"></div>
            <StyledButton size="small">
                {getICon(props.details.category)}
            </StyledButton>
            
            
            <span className="content" onClick={handleOpen}>{props.details.title}
            </span>

            <Modal
                animation={"false"}
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {modalBody}
            </Modal>

        </div>


    );
}

export default LifeEvent;