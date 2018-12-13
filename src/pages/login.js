import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NavBar from '../components/navbar';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '720px',
    backgroundColor: 'black'
  },
  containerGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  navBarHolder: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  welcomeGrid: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    marginTop: '7%',
  },
  typographyOne: {
    fontFamily: 'Montserrat',
    fontSize: '70px',
    fontWeight: '800',
    color: '#c5c5c5'
  },
  typographyTwo: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: '#c5c5c5'
  },
  buttonHolder: {
    marginTop: '5%',
    marginBottom: '8%',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#7D2C1A',
    '&:hover': {
      backgroundColor: "#7D1C05",
    },
  },
  links: {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#cccccc'
  },
});

class Select extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <Grid className={classes.containerGrid} container>
          <Grid className={classes.navBarHolder} item xs={12}>
            <NavBar pageOne="/about" textOne="About" pageTwo="/contact" textTwo="Contact" />
          </Grid>

          <Grid className={classes.welcomeGrid} item>
            <p className={classes.typographyOne}>
              Diversify Your Sound
            </p>
            <p className={classes.typographyTwo}>
              Make your choices in the following 10 steps to specify the tune you love.
            </p>
            <p className={classes.typographyTwo}>
              We will then curate a playlist that will surprise your ears.
            </p>
            <p className={classes.typographyTwo}>
              To use our service, please login to your Spotify account:
            </p>
          </Grid>

          <Grid className={classes.buttonHolder} item xs={12}>
            <Button variant="contained" onClick={() => window.location = 'http://localhost:3000/login'} size="large" className={classes.button}>
              Login to Spotify
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };
};

const mapStateToProps = state => {
  state = state.SelectionReducer;
  return {

  };
};

Select.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(styles)(Select);
const selectConnected = connect(mapStateToProps)(withstyles);
export default selectConnected;
