import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const playlistSuccessStyle = playlistSuccessStyle => ({
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
  }
});

function PlaylistSuccess(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Grid className={classes.gridSection}>
        <p className={classes.textHeader}>
          Playlist DONE!
        </p>
      </Grid>
    </div>
  )
};

PlaylistSuccess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(playlistSuccessStyle)(PlaylistSuccess);
