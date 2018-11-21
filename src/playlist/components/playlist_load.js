import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const playlistLoadStyle = playlistLoadStyle => ({
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'flex-end',
    backgroundColor: 'black',
    width: '100%',
    height: '730px',
  },
  gridSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '5%'
  },
  textHeader: {
    fontSize: '60px',
    fontFamily: 'Montserrat',
    color: '#7D2C1A'
  },
  textContent: {
    fontSize: '20px',
    fontFamily: 'Montserrat',
    color: '#FEF6AF',
  },
  paper: {
    backgroundColor: 'black',
    width: '100%',
    marginTop: '5%'
  },
  holderGrids: {
    backgroundColor: 'black',
    marginTop: '1%',
    display: 'flex',
    justifyContent: 'center'
  },
  progress: {
    color: '#7D1C05',
  },
});

function PlaylistLoad(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Grid className={classes.gridSection}>
        <p className={classes.textHeader}>
          {props.title}
        </p>
        <p className={classes.textContent}>
          {props.content}
        </p>
      </Grid>
      <Paper className={classes.paper}>
        <Grid className={classes.holderGrids}>
          <CircularProgress className={classes.progress} size={100} thickness={5} />
        </Grid>
      </Paper>
    </div>
  )
};

PlaylistLoad.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(playlistLoadStyle)(PlaylistLoad);
