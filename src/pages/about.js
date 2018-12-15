import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
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
  },
  teamHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#191919',
  },
  team: {
    marginTop: '2%',
    marginBottom: '2%',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '50px',
    color: '#c5c5c5'
  },
  teamDivider: {
    display: 'flex',
    flexFlow: 'row, wrap',
    justifyContent: 'center',
    width: '100%',
    height: '70%',
    marginBottom: '5%'
  },
  avatar: {
    width: 180,
    height: 180,
  },
  names: {
    marginTop: '5%',
    fontFamily: 'Montserrat',
    fontSize: '22px',
    fontWeight: '800',
    color: '#c5c5c5'
  },
  memberOne: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  memberTwo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  memberBackground: {
    fontFamily: 'Montserrat',
    color: '#A99884',
    fontSize: '16px',
    paddingTop: '3%',
    paddingRight: '5%',
    paddingLeft: '10%',
    paddingBottom: '2%'
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

        <Grid className={classes.teamHolder} item xs={12}>
          <Typography className={classes.team}>{this.props.teamTitle}</Typography>
          <Grid className={classes.teamDivider} item xs={12}>
            <Grid className={classes.memberOne} item xs={12}>
              <Avatar alt="alican_pic" src="./alican.jpg" className={classes.avatar} />
              <Typography className={classes.names}>{this.props.teamMemberOne}</Typography>
                <Typography className={classes.memberBackground}>{this.props.teamMemberOneBack}</Typography>
            </Grid>
            <Grid className={classes.memberTwo} item xs={12}>
              <Avatar alt="tolga_pic" src="/tolga.jpg" className={classes.avatar} />
              <Typography className={classes.names}>{this.props.teamMemberTwo}</Typography>
              <Typography className={classes.memberBackground}>{this.props.teamMemberTwoBack}</Typography>
            </Grid>
          </Grid>
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
