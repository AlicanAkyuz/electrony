import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import MyButton from '../components/myButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#191919'
  },
  gridsHolder: {
    backgroundColor: '#000000'
  },
  soundiversifyHolder: {
    marginTop: '7%'
  },
  logoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  soun: {
    fontFamily: 'Montserrat',
    fontSize: '700%',
    fontWeight: '800',
    color: '#7D2C1A',
  },
  d: {
    fontFamily: 'Montserrat',
    fontSize: '700%',
    fontWeight: '800',
    color: '#7D2C1A',
  },
  iversify: {
    fontFamily: 'Montserrat',
    fontSize: '700%',
    fontWeight: '800',
    color: '#FEF6AF',
  },
  subTextHolder: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3%'
  },
  introTypography: {
    fontFamily: 'Montserrat',
    fontSize: '30px',
    color: '#A99884'
  },
  buttonHolder: {
    marginTop: '10%',
    marginBottom: '8%'
  },
  aboutHolder: {
    backgroundColor: '#191919',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  about: {
    marginTop: '2%',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '50px',
    color: '#c5c5c5'
  },
  aboutContent: {
    fontFamily: 'Montserrat',
    fontSize: '17px',
    color: '#A99884',
    paddingTop: '2%',
    paddingRight: '7%',
    paddingLeft: '7%',
    paddingBottom: '2%'
  },
  buttonHolderTwo: {
    marginBottom: '3%'
  },
  logoHolder: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  workWith: {
    marginTop: '3%',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '50px',
    color: '#c5c5c5'
  },
  logoImage: {
    padding: '10%',
    maxHeight: '300px',
    maxWidth: '700px'
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

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid className={classes.gridsHolder} container spacing={24}>

          <Grid className={classes.soundiversifyHolder} item xs={12}>
            <div className={classes.logoContainer}>
              <Typography className={classes.soun}>
                Soun
              </Typography>
              <Typography className={classes.d}>
                 d
              </Typography>
              <Typography className={classes.iversify}>
                 iversify
              </Typography>
            </div>
          </Grid>

          <Grid className={classes.subTextHolder} item xs={12}>
            <Typography className={classes.introTypography}>
              Music Beyond Genres.
            </Typography>
          </Grid>

          <Grid className={classes.buttonHolder} item xs={12}>
            <MyButton page="/select_details" text="Diversify" position="center" />
          </Grid>


          <Grid className={classes.aboutHolder} item xs={12}>
            <Typography className={classes.about}>
              About
            </Typography>
            <Typography className={classes.aboutContent}>
              yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence,
              ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written..... yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a
              widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence, ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written.......
              <br /><br />
              Have you ever asked someone what music genres they like? And received a quite vague answer?
              This may be because categorizing music according to genre is inaccurate
              and does not encompass the extent to which we establish a relationship with sounds.
              Here at yetmusic, instead of music genres, we offer you another way
              to describe the tunes you like.
              We believe that music as a phenomenon
              requires attention paid to more parameters than simple genres.
              Hence we offer you the following 10 steps with which you can specify in detail
              the tunes that you are looking for.

              By the end, we will compile a playlist according
              to your tastes and we are sure that you will not be able to stop listening to it!
              <br /><br />
            </Typography>
            <Grid className={classes.buttonHolderTwo} item xs={12}>
              <MyButton page="/select_details" text="Get Started" position="center" />
            </Grid>
          </Grid>

          <Grid className={classes.logoHolder} item xs={12}>
            <Typography className={classes.workWith}>
              We Work With
            </Typography>
            <img className={classes.logoImage} src="http://www.radiofficine.it/wp-content/uploads/2015/09/Streaming-Audio-2015-1200x500.png" alt="spotify" />
          </Grid>

          <Grid className={classes.teamHolder} item xs={12}>
            <Typography className={classes.team}>
              Our Team
            </Typography>
            <Grid className={classes.teamDivider} item xs={12}>
              <Grid className={classes.memberOne} item xs={12}>
                <Avatar alt="alican_pic" src="./alican.jpg" className={classes.avatar} />
                <Typography className={classes.names}>
                  Alican Akyuz
                </Typography>
                  <Typography className={classes.memberBackground}>
                    yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence,
                    ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written..... yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a
                    widespread murmur among the music enthusiasts in berlin, germany,
                  </Typography>
              </Grid>
              <Grid className={classes.memberTwo} item xs={12}>
                <Avatar alt="tolga_pic" src="/tolga.jpg" className={classes.avatar} />
                <Typography className={classes.names}>
                  Tolga Akyuz
                </Typography>
                <Typography className={classes.memberBackground}>
                  yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a widespread murmur among the music enthusiasts in berlin, germany, that one cannot access the kind of music one seeks. hence,
                  ideas were collected, the project was drawn, and an algorithm that accurately pinpoints one’s music taste was written..... yet, music was created by akyüz brothers in december, 2018. the idea of the project derived from a
                  widespread murmur among the music enthusiasts in berlin, germany,
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid className={classes.footer} item xs={12}>
          </Grid>

        </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
