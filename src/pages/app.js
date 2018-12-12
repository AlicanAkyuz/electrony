import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import MyButton from '../components/myButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
    color: '#c5c5c5'
  },
  buttonHolder: {
    marginTop: '10%',
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
  aboutContentOne: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: '#c5c5c5',
    marginTop: '2%',
    paddingRight: '3%',
    paddingLeft: '3%'
  },
  aboutContentTwo: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: '#c5c5c5',
    paddingTop: '1%',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  aboutContentThree: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: '#c5c5c5',
    paddingTop: '1%',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  aboutContentFour: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: '#c5c5c5',
    paddingTop: '1%',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  aboutContentFive: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: '#c5c5c5',
    paddingTop: '5%',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  aboutContentSix: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: '#c5c5c5',
    paddingTop: '1%',
    paddingRight: '5%',
    paddingLeft: '5%',
    marginBottom: '5%'
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
  uploadOptionsGrid: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginBottom: '10%',
    marginTop: '5%'
  },
  logos: {
    width: "210px",
    height: "95px"
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

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid className={classes.gridsHolder} container spacing={24}>
          <Grid className={classes.soundiversifyHolder} item xs={12}>
            <div className={classes.logoContainer}>
              <Typography className={classes.soun}>{this.props.sound}</Typography>
              <Typography className={classes.iversify}>{this.props.iversify}</Typography>
            </div>
          </Grid>
          <Grid className={classes.subTextHolder} item xs={12}>
            <Typography className={classes.introTypography}>{this.props.subTitle}</Typography>
          </Grid>
          <Grid className={classes.buttonHolder} item xs={12}>
            <Button position="center" size="medium" className={classes.button}>
              <Link className={classes.links} to="/login">Diversify</Link>
            </Button>
          </Grid>
          <Grid className={classes.aboutHolder} item xs={12}>
            <Typography className={classes.about}>{this.props.aboutTitle}</Typography>
            <Typography className={classes.aboutContentOne}>{this.props.aboutTop}</Typography>
            <Typography className={classes.aboutContentTwo}>{this.props.aboutSecond}</Typography>
            <Typography className={classes.aboutContentThree}>{this.props.aboutThird}</Typography>
            <Typography className={classes.aboutContentFour}>{this.props.aboutFourth}</Typography>
            <Typography className={classes.aboutContentFive}>{this.props.aboutFifth}</Typography>
            <Typography className={classes.aboutContentSix}>{this.props.aboutSix}</Typography>
            <Grid className={classes.buttonHolderTwo} item xs={12}>
              <MyButton page="/select_details" text="Get Started" position="center" />
            </Grid>
          </Grid>
          <Grid className={classes.logoHolder} item xs={12}>
            <Typography className={classes.workWith}>{this.props.workWithTitle}</Typography>
            <Grid className={classes.uploadOptionsGrid} item>
              <img className={classes.logos} src="./spotify.jpg" alt="Spotify Logo" />
              <img className={classes.logos} src="./apple.jpg" alt="Apple Music Logo" />
              <img className={classes.logos} src="./deezer.jpg" alt="Deezer Music Logo" />
            </Grid>
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
          <Grid className={classes.footer} item xs={12}></Grid>
        </Grid>
      </div>
    );
  };
};

const mapStateToProps = state => {
  state = state.AppReducer;
  return {
    sound: state.pageTitle.sound,
    iversify: state.pageTitle.iversify,
    subTitle: state.pageTitle.subTitle,
    aboutTitle: state.about.title,
    aboutTop: state.about.topText,
    aboutSecond: state.about.secondText,
    aboutThird: state.about.thirdText,
    aboutFourth: state.about.fourthText,
    aboutFifth: state.about.fifthText,
    aboutSix: state.about.sixthText,
    workWithTitle: state.workWith.title,
    teamTitle: state.team.title,
    teamMemberOne: state.team.teamMemberOne,
    teamMemberOneBack: state.team.teamMemberOneBack,
    teamMemberTwo: state.team.teamMemberTwo,
    teamMemberTwoBack: state.team.teamMemberTwoBack
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(styles)(App);
const appConnected = connect(mapStateToProps)(withstyles);
export default appConnected;
