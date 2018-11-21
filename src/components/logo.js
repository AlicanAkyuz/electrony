import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const logoStyle = logoStyle => ({
  root: {
    flexGrow: 0
  },
  soundiversifyHolder: {
    display: 'flex',
    flexDirection: 'row'
  },
  sound: {
    fontFamily: 'Montserrat',
    fontSize: '40px',
    fontWeight: '800',
    color: '#7D2C1A',
  },
  iversify: {
    fontFamily: 'Montserrat',
    fontSize: '40px',
    fontWeight: '800',
    color: '#FEF6AF',
  },
});

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

function Logo(props) {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid className={classes.soundiversifyHolder} item xs={12}>
            <Typography className={classes.sound}>
              Sound
            </Typography>
            <Typography className={classes.iversify}>
               iversify
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  };

export default withStyles(logoStyle)(Logo);
