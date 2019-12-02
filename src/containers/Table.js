import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card'
import ButtonDefault from '../components/ButtonDefault'

import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import SelectName from '../components/SelectName'
 import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup'
const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  card: {
  padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
  },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperModal: {
      height: '2000%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

var styleUl = {
margin: 0,
  padding: 0,
  listStyleType: "none"
}

var x = () => {
    console.log('quan')
}

var setCssDoing = () => {
    document.getElementById('doing').style.backgroundColor = '#4caf50'
    document.getElementById('done').style.backgroundColor = 'white'
    document.getElementById('fail').style.backgroundColor = 'white'
}

var setCssDone = () => {
    document.getElementById('doing').style.backgroundColor = 'white'
    document.getElementById('done').style.backgroundColor = '#90caf9'
    document.getElementById('fail').style.backgroundColor = 'white'
}

var setCssFail = () => {
    document.getElementById('doing').style.backgroundColor = 'white'
    document.getElementById('done').style.backgroundColor = 'white'
    document.getElementById('fail').style.backgroundColor = '#f48fb1'
}

export default function AutoGrid() {
  const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Cong viec</Paper>
           <Paper className={classes.card}>
               <ul style={styleUl} >
                                                            <li onClick={handleOpen}><Card /></li>
                                                            <li><Card /></li>
                                                            <li><Card /></li>
                                                          </ul>
                                                          <ButtonDefault />
           </Paper>


        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Quan1 </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Quan2</Paper>
        </Grid>
      </Grid>

        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }
            }
        >
            <Fade in={open} >
                <div className={classes.paperModal}>
                    <div>
                        <label>Assignee</label>
                    <Select labelId="label" id="select" style={{width:"100%"}}>
                        <MenuItem value="quan1">Quan1</MenuItem>
                        <MenuItem value="quan2">Quan2</MenuItem>
                    </Select>
                    </div><div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Content"
                        multiline
                        rows="4"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <div>
                        <p></p>
                    <Grid item xs={12} md={12} style={{width:"200%"}}>
                        <ButtonGroup fullWidth aria-label="full width outlined button group">
                            <Button id="doing" onClick={setCssDoing}>Doing</Button>
                            <Button id="done" onClick={setCssDone}>Done</Button>
                            <Button id="fail" onClick={setCssFail}>Fail</Button>
                        </ButtonGroup>
                    </Grid>

                    </div>
                    <p></p>
                    <p></p>
                    </div><div>
                    <Button variant="contained" color="primary" onClick={handleClose}>
                        Ok
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </div>
                </div>
            </Fade>
        </Modal>
    </div>
  );
}