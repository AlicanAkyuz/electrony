import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';

const styles = aboutTheme => ({
  root: {
    flexGrow: 1,
    height: '705px',
    backgroundColor: '#000000'
  },
  containerGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  navBarHolder: {
    width: '100%',
    position: 'fixed'
  },
  aboutHolder: {
    display: 'flex',
    flexDirection: 'column',
    color: '#A99884',
    fontFamily: 'Montserrat',
    fontSize: '17px',
    paddingTop: '8%',
    paddingRight: '15%',
    paddingLeft: '15%',
    paddingBottom: '5%',
  },
  aboutTitle: {
    marginTop: '2%',
    marginBottom: '2%',
    fontFamily: 'Roboto',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: '40px',
    color: '#c5c5c5'
  },
  aboutContent: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '18px',
    color: '#c5c5c5'
  },
  teamHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0c0c0c',
  },
  team: {
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: '40px',
    color: '#c5c5c5'
  },
  teamDivider: {
    display: 'flex',
    flexFlow: 'row, wrap',
    justifyContent: 'center',
    width: '100%',
    height: '70%',
    marginBottom: '5%',
    marginTop: '2%'
  },
  membersGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    width: 150,
    height: 150,
  },
  names: {
    marginTop: '3%',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: '800',
    color: '#c5c5c5'
  },
  memberBackground: {
    fontFamily: 'Montserrat',
    color: '#c5c5c5',
    fontSize: '13px',
    paddingRight: '5%',
    paddingLeft: '10%',
  },
  buttonHolder: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-3%',
    paddingBottom: '5%',
  },
  button: {
    height: '45px',
    width: '150px',
    backgroundColor: '#4A7023',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: "#00611C",
    },
  },
  links: {
    fontFamily: 'Roboto',
    fontSize: '17px',
    fontWeight: '400',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#F0FFF0'
  }
});

export function About(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid className={classes.containerGrid} container spacing={12}>

        <Grid className={classes.navBarHolder} item xs={12}>
          <NavBar pageOne="/login" textOne="DISCOVER" pageTwo="/contact" textTwo="CONTACT" />
        </Grid>

        <Grid className={classes.aboutHolder} item xs={12}>
          <h1 className={classes.aboutTitle}>About Us</h1>
          <hr style={{width: '50px'}} />
          <h4 className={classes.aboutContent}>
            Electronify is an app that curates music according to the complexities that informs human aural perception.
            We believe that classifying music according to genres is archaic.
            Genres do not address the multifaceted aesthetic connection we establish with sound and music.
            Hence we want to help those who, when asked what kind of music they like, answers pretty much anything!
            Make your choices in 10 steps to specify the tunes you love.
            We will curate a playlist that will surprise your ears.
            <br /><br />
            Electronify is an app that curates music according to the complexities that informs human aural perception.
            We believe that classifying music according to genres is archaic.
            Genres do not address the multifaceted aesthetic connection we establish with sound and music.
            Hence we want to help those who, when asked what kind of music they like, answers pretty much anything!
            Make your choices in 10 steps to specify the tunes you love.
            We will curate a playlist that will surprise your ears.
            <br /><br />
            Electronify is an app that curates music according to the complexities that informs human aural perception.
            We believe that classifying music according to genres is archaic.
            Genres do not address the multifaceted aesthetic connection we establish with sound and music.
            Hence we want to help those who, when asked what kind of music they like, answers pretty much anything!
            Make your choices in 10 steps to specify the tunes you love.
            We will curate a playlist that will surprise your ears.
          </h4>

        </Grid>

        <Grid className={classes.teamHolder} item xs={12}>
          <h1 className={classes.team}>Our Team</h1>
          <hr style={{width: '50px'}} />
          <Grid className={classes.teamDivider} item xs={12}>

            <Grid className={classes.membersGrid} item xs={12}>
              <Avatar alt="alican_pic" src="./tansu.jpg" className={classes.avatar} />
              <h3 className={classes.names}>
                Mehmet Tansu Isikli
              </h3>
              <h4 className={classes.memberBackground}>
                Background background background background background background background background
                background background background background background background background background
                background background background background background background background background
                background background background background background background background background
              </h4>
            </Grid>

            <Grid className={classes.membersGrid} item xs={12}>
              <Avatar alt="tansu_pic" src="./alican.jpg" className={classes.avatar} />
              <h3 className={classes.names}>
                Alican Akyuz
              </h3>
              <h4 className={classes.memberBackground}>
                Background background background background background background background background
                background background background background background background background background
                background background background background background background background background
                background background background background background background background background
              </h4>
            </Grid>

            <Grid className={classes.membersGrid} item xs={12}>
              <Avatar alt="tolga_pic" src="/tolga.jpg" className={classes.avatar} />
              <h3 className={classes.names}>
                Tolga Akyuz
              </h3>
              <h4 className={classes.memberBackground}>
                Background background background background background background background background
                background background background background background background background background
                background background background background background background background background
                background background background background background background background background
              </h4>
            </Grid>

          </Grid>

          <Grid className={classes.buttonHolder} item xs={12}>
            <Button position="center" size="medium" className={classes.button}>
              <Link className={classes.links} to="/login">GET STARTED</Link>
            </Button>
          </Grid>

        </Grid>

      </Grid>
    </div>
  )
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
