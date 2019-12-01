import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card'
import ButtonDefault from '../components/ButtonDefault'

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
  }
}));

var styleUl = {
margin: 0,
  padding: 0,
  listStyleType: "none"
}

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Cong viec</Paper>
           <Paper className={classes.card}> <ul style={styleUl}>
                                                            <li><Card /></li>
                                                            <li><Card /></li>
                                                            <li><Card /></li>
                                                          </ul>
                                                          <ButtonDefault /></Paper>


        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Quan1 </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Quan2</Paper>
        </Grid>
      </Grid>
    </div>
  );
}