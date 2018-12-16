import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const playlistLoadStyle = playlistLoadStyle => ({
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#000',
    width: '100%',
  },
  textHeader: {
    marginTop: '8%',
    fontSize: '60px',
    fontFamily: 'Roboto',
    fontWeight: '800',
    color: '#4A7023'
  },
  textContent: {
    fontSize: '20px',
    fontFamily: 'Montserrat',
    color: '#e5e5e5',
    marginBottom: '10%'
  },
  progress: {
    color: '#4A7023',
  },
});

function PlaylistLoad(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <p className={classes.textHeader}>{props.title}</p>
      <p className={classes.textContent}>{props.content}</p>
      <div>
        <CircularProgress className={classes.progress} size={100} thickness={5} />
      </div>
    </div>
  )
};

PlaylistLoad.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(playlistLoadStyle)(PlaylistLoad);
