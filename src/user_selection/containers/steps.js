import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { getSteps, getStepContent } from '../components/stepper_functions';
import DialogBox from '../components/dialog_box';
import { onTokenReceived,
         getUserData,
         onDialogOpen,
         onEscape,
         onDialogClose,
         onBackClick,
         handleGenreSelection,
         handleDanceabilitySelection,
         handleEnergySelection,
         handleLoudnessSelection,
         handleTempoSelection,
         handlePositivenessSelection,
         onStepsReset
       } from '../../actions/selection_actions/actions';
import { onPlaylistReset } from '../../actions/playlist_actions/actions';

const styles = theme => ({
  container: {
    display: 'grid',
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: '10vmin 5vmin 150vmin 5vmin',
    gridTemplateColumns: '10% 10% 5% 10% 10% 10% 10% 10% 5% 10% 10% ',
    backgroundColor: '#0c0c0c'
  },
  firstRow: {
    gridRow: '1 / span 1',
    gridColumn: '1 / span 11',
    backgroundColor: '#0f0f0f',
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '1 / span 3',
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '4 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '5 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '6 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  fourthButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '7 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  fifthButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '8 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  stepperItem: {
    gridRow: '3 / span 1',
    gridColumn: '2 / span 9',
    textAlign: 'center'
  },
///////////////////////////////////////////////////////////////////////////////
  logo: {
    fontFamily: 'Roboto',
    fontSize: '2.4vmax',
    fontWeight: '800',
    marginTop: '4%',
    marginLeft: '15%'
  },
  logoLink: {
    textDecoration: 'none',
    color: '#4A7023',
  },
  titleText: {
    fontFamily: 'Montserrat',
    fontSize: '1.8vmax',
    fontWeight: '400',
    color: '#C1CDC1',
    marginBottom: '3%'
  },
  loginText: {
    fontFamily: 'Montserrat',
    fontSize: '1.8vmax',
    fontWeight: '400',
    color: '#C1CDC1',
    marginTop: '7%',
    marginBottom: '10%'
  },
  loginButton: {
   margin: theme.spacing.unit,
   borderRadius: '3px',
   backgroundColor: "#00611C",
   '&:hover': {
     backgroundColor: "#4A7023",
   },
   color: '#C1CDC1',
   fontFamily: 'Montserrat',
   fontWeight: '800'
 },
  arrow: {
    width: '2.8vmax',
    height: '2.3vmax',
    marginBottom: '3%'
  },
  links: {
    fontFamily: 'Roboto',
    fontSize: '1vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
  },
  selectedLink: {
    fontFamily: 'Roboto',
    fontSize: '1vmax',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#00611C',
    '&:hover': {
      color: "#CFDBC5",
    },
  },
  stepperBody: {
    backgroundColor: '#191919',
    maxWidth: '100%',
    borderRadius: '5px'
  },
  stepLabel: {
    height: '5vw',
    borderRadius: '5px',
    backgroundColor: '#0c0c0c',
    textAlign: 'center'
  },
  labelText: {
    fontFamily: 'Roboto',
    fontSize: '2vmax',
    fontWeight: '400',
    color: '#c6c6c6',
  },
  stepContent: {
    textAlign: 'center',
  },
  contentText: {
    fontFamily: 'Roboto',
    fontSize: '1.2vmax',
    fontWeight: '400',
    color: '#c6c6c6',
    textAlign: 'center'
  },
  selectButton: {
    marginTop: theme.spacing.unit + 3,
    marginRight: theme.spacing.unit + 6,
    width: '18%',
    borderRadius: '5px',
    backgroundColor: '#00611C',
    '&:hover': {
      backgroundColor: "#4A7023",
    }
  },
  select: {
    fontFamily: 'Montserrat',
    fontSize: '1.2vmax',
    fontWeight: '800',
    color: '#C1CDC1'
  },
  goBackButton: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit + 5,
    width: '15%',
    borderRadius: '5px',
    backgroundColor: '#40664D',
    '&:hover': {
      backgroundColor: "#596C56",
    },
  },
  goBack: {
    fontFamily: 'Montserrat',
    fontSize: '1vmax',
    fontWeight: '800',
    color: '#C1CDC1'
  },
  doneButton: {
    marginLeft: '1%',
    backgroundColor: '#00611C',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    borderRadius: '5px'
  },
  link: {
    fontFamily: 'Montserrat',
    textDecoration: 'none',
    fontWeight: '800',
    color: '#C1CDC1',
  },
  finalLink: {
    fontFamily: 'Montserrat',
    fontSize: '1.5vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#c5c5c5",
    },
  }
});

class Steps extends React.Component {
   componentWillUnmount() {
     this.props.dispatch(onStepsReset());
     this.props.dispatch(onPlaylistReset());
   };

  render() {
    const { classes } = this.props;
    const userName = this.props.user_name;

    if (!this.props.user_token) {
      const token = localStorage.getItem('token');
      this.props.dispatch(onTokenReceived(token));
      this.props.dispatch(getUserData(token));
    };

    if (this.props.user_token && !this.props.user_name) {
      this.props.dispatch(getUserData(this.props.user_token))
    };

    let createPlaylistButton;
    if (this.props.activeStep === getSteps().length) {
      createPlaylistButton =
      <div class="animated fadeInDownBig" style={{textAlign: 'center'}}>
        <Button size="large" variant="contained" color="primary" className={classes.doneButton}>
          <Link className={classes.link} to="/playlist">GIVE ME SONGS!</Link>
        </Button>
      </div>
    };

    let goBackButton;
    if (this.props.activeStep > 0) {
      goBackButton =
      <div class="animated fadeInRightBig" style={{textAlign: 'center', width: '100%'}}>
        <Button size="small" variant="contained" className={classes.goBackButton}
                onClick={() => {this.props.dispatch(onBackClick())}}>
          <Typography className={classes.goBack}>GO BACK</Typography>
        </Button>
      </div>
    };

    let body;
    if (this.props.user_name) {
      body =
        <div className={classes.stepperItem}>
          <div class="animated fadeIn">
            <Typography className={classes.titleText}>Hi, {userName}! Follow the guide below to define your tune</Typography>
            <img className={classes.arrow} src="./arrow.png" alt="arrow" />
          </div>
          <Stepper className={classes.stepperBody} activeStep={this.props.activeStep} orientation="vertical">
            {getSteps().map((label, index) => {
              return (
                <Step className={classes.step} key={label}>
                  <StepLabel icon className={classes.stepLabel}>
                    <Typography className={classes.labelText}>
                      {label}
                    </Typography>
                  </StepLabel>
                  <StepContent className={classes.stepContent}>
                    <Typography className={classes.contentText}>{getStepContent(index)}</Typography>
                    <div class="animated fadeInLeftBig" style={{textAlign: 'center', width: '100%'}}>
                      <Button size="small" variant="contained" className={classes.selectButton}
                              onClick={() => {this.props.dispatch(onDialogOpen())}}>
                        <Typography className={classes.select}>SELECT</Typography>
                      </Button>
                    </div>
                    {goBackButton}
                    <DialogBox
                      handleDialogOpen={() => {this.props.dispatch(onDialogOpen())}}
                      handleEscape={() => {this.props.dispatch(onEscape())}}
                      handleDialogClose={() => {this.props.dispatch(onDialogClose())}}
                      handleGenreSelection={(value) => {this.props.dispatch(handleGenreSelection(value))}}
                      handleDanceabilitySelection={(value) => {this.props.dispatch(handleDanceabilitySelection(value))}}
                      handleEnergySelection={(value) => {this.props.dispatch(handleEnergySelection(value))}}
                      handleLoudnessSelection={(value) => {this.props.dispatch(handleLoudnessSelection(value))}}
                      handleTempoSelection={(value) => {this.props.dispatch(handleTempoSelection(value))}}
                      handlePositivenessSelection={(value) => {this.props.dispatch(handlePositivenessSelection(value))}}
                      activeStep={this.props.activeStep}
                      dialogOpen={this.props.dialogOpen}
                      genreTitle={this.props.genreTitle}
                      danceabilityTitle={this.props.danceabilityTitle}
                      energyTitle={this.props.energyTitle}
                      loudnessTitle={this.props.loudnessTitle}
                      tempoTitle={this.props.tempoTitle}
                      positivenessTitle={this.props.positivenessTitle} />
                  </StepContent>
                </Step>
              );
            })}
            {createPlaylistButton}
          </Stepper>
        </div>
    } else {
      body =
      <div className={classes.stepperItem}>
        <Typography className={classes.loginText}>To create a playlist, please login to Spotify:</Typography>
        <Button variant="contained" color="primary" className={classes.loginButton}
                onClick={() => window.location = 'https://electrony.herokuapp.com/login'}>
          Login to Spotify
        </Button>
      </div>
    };

    return (
      <div className={classes.container}>
        <div className={classes.firstRow}></div>
        <div className={classes.logoItem}>
          <Typography className={classes.logo}>
            <Link className={classes.logoLink} to="/">Electrony</Link>
          </Typography>
        </div>
        <div className={classes.firstButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/">HOME</Link></Button>
        </div>
        <div className={classes.secondButtonItem}>
          <Button disabled position="center" size="medium"><Link className={classes.selectedLink} to="/steps">PLAYLIST</Link></Button>
        </div>
        <div className={classes.thirdButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/about">ABOUT</Link></Button>
        </div>
        <div className={classes.fourthButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/ourteam">TEAM</Link></Button>
        </div>
        <div className={classes.fifthButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/contact">CONTACT</Link></Button>
        </div>
        {body}
      </div>
    );
  };
};

const mapStateToProps = state => {
  const info = state.SelectionReducer;
  return {
    user_token: info.user_data.user_token,
    user_name: info.user_data.user_name,
    activeStep: info.select.activeStep,
    dialogOpen: info.select.dialogOpen,
    genre: info.user_selection.genre,
    genreTitle: info.titles.genre,
    danceability: info.user_selection.danceability,
    danceabilityTitle: info.titles.danceability,
    energy: info.user_selection.energy,
    energyTitle: info.titles.energy,
    loudness: info.user_selection.loudness,
    loudnessTitle: info.titles.loudness,
    tempo: info.user_selection.tempo,
    tempoTitle: info.titles.tempo,
    positiveness: info.user_selection.positiveness,
    positivenessTitle: info.titles.positiveness
  };
};

Steps.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(styles)(Steps);
const selectConnected = connect(mapStateToProps)(withstyles);
export default selectConnected;
