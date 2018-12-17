ABOUt:
<Grid className={classes.navBarHolder} item xs={12}>
  <NavBar pageOne="/select_details" textOne="GET STARTED" pageTwo="/contact" textTwo="CONTACT" />
</Grid>

FORM SUBMIT:
<Grid className={classes.navBarHolder} item xs={12}>
  <NavBar pageOne="/select_details" textOne="GET STARTED" pageTwo="/about" textTwo="ABOUT" />
</Grid>

PLAYLIStÇ
<Grid className={classes.navBarHolder} item xs={12}>
  <NavBar pageOne="/about" textOne="About" pageTwo="/contact" textTwo="Contact" />
</Grid>





import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const navBarStyle = navBarStyle => ({
  container: {
    display: 'grid',
    gridTemplateRows: '10%',
    gridTemplateColumns: '10% 22% 40% 10% 10% 10%',
    backgroundColor: 'orange'
  },
  colTwo: {
    gridColumn: '2 / span 1',
    gridRow: '1 / span 1',
    placeSelf: 'center'
  },
  colFour: {
    gridColumn: '4 / span 1',
    gridRow: '1 / span 1',
    placeSelf: 'center'
  },
  colFive: {
    gridColumn: '5 / span 1',
    gridRow: '1 / span 1',
    placeSelf: 'center'
  },
  logo: {
    fontFamily: 'Montserrat',
    fontSize: '3vw',
    fontWeight: '800',
    color: '#4A7023',
  },
  button: {
    height: '40px',
    width: '140px',
    borderRadius: '8px',
  },
  links: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#C1CDC1',
    '&:hover': {
      color: "#00611C",
    },
  }
});

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.colTwo}>
        <text className={classes.logo}>Electronify</text>
      </div>
      <div className={classes.colFour}>
        <Button position="center" size="medium" className={classes.button}>
          <Link className={classes.links} to={props.pageOne}>{props.textOne}</Link>
        </Button>
      </div>
      <div className={classes.colFive}>
        <Button position="center" size="medium" className={classes.button}>
          <Link className={classes.links} to={props.pageTwo}>{props.textTwo}</Link>
        </Button>
      </div>
    </div>
  );
};

export default withStyles(navBarStyle)(NavBar)
