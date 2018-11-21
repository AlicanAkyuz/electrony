import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/navbar';
import MyButton from '../components/myButton';

const styles = aboutTheme => ({
  root: {
    flexGrow: 1,
    height: '720px',
    backgroundColor: 'black'
  },
  containerGrid: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center'
  },
  navBarHolder: {
    width: '100%',
    position: 'fixed'
  },
  textGrid: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '15%',
    paddingRight: '15%',
    paddingLeft: '15%',
    paddingBottom: '5%',
    color: '#A99884',
    fontFamily: 'Roboto',
    fontSize: '17px'
  },
  buttonHolder: {
    marginBottom: '5%'
  }
});

export function About(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid className={classes.containerGrid} container spacing={12}>

        <Grid className={classes.navBarHolder} item xs={12}>
          <NavBar pageOne="/select_details" textOne="Discover" pageTwo="/contact" textTwo="Contact" />
        </Grid>

        <Grid className={classes.textGrid} item xs={12}>
          yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence,
          ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written..... yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a
          widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence, ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written.......
          <br /><br />
          yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence,
          ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written..... yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a
          widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence, ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written.......
          <br /><br />
          yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence,
          ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written.....
          <br /><br />
          why Music?
          <br /><br />
          yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence,
          ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written..... yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a
          widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence, ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written.......
          <br /><br />
          why you deserve good music?
          <br /><br />
          yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence,
          ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written..... yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a
          widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence, ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written.......
          <br /><br />
          how yetmusic helps you?
          <br /><br />
          yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence,
          ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written..... yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a
          widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence, ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written.......
        </Grid>

        <Grid className={classes.buttonHolder} item xs={12}>
          <MyButton page="/select_details" text="Diversify" position="center" />
        </Grid>

      </Grid>
    </div>
  )
};

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
