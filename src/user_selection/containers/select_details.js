import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { getSteps, getStepContent } from '../components/stepper_functions';
import DialogBox from '../components/dialog_box';
import { getUserData,
         onDialogOpen,
         onDialogClose,
         onBackClick,
         handleGenreSelection,
         handleDanceabilitySelection,
         handleEnergySelection,
         handleKeySelection,
         handleLoudnessSelection,
         handleModeSelection,
         handleTempoSelection,
         handlePositivenessSelection
       } from '../../actions/selection_actions/actions';

const styles = theme => ({
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '6% 8% 8% 5% 5% 10% 7% 5% 57% 5%',
    gridTemplateColumns: '5% 8% 8% 8% 42% 8% 8% 8% 5%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 2',
    placeSelf: 'center',
    paddingTop: '20%'
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '6 / span 1',
    placeSelf: 'center',
    paddingTop: '40%'
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '7 / span 1',
    placeSelf: 'center',
    paddingTop: '40%'
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '8 / span 1',
    placeSelf: 'center',
    paddingTop: '40%'
  },
  firsttitleItem: {
    gridRow: '3 / span 1',
    gridColumn: '3 / span 5',
    placeSelf: 'center'
  },
  hr: {
    gridRow: '5 / span 1',
    gridColumn: '4 / span 3',
    placeSelf: 'center'
  },
  secondtitleItem: {
    gridRow: '6 / span 1',
    gridColumn: '3 / span 5',
    placeSelf: 'center'
  },
  arrowItem: {
    gridRow: '7 / span 1',
    gridColumn: '5 / span 1',
    placeSelf: 'center'
  },
  stepperItem: {
    gridRow: '9 / span 1',
    gridColumn: '1 / span 9',
  },
///////////////////////////////////////////////////////////////////////////////
  logo: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '3vmax',
    fontWeight: '800',
    color: '#4A7023',
  },
  firstText: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '2.5vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  secondText: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '2.5vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  arrow: {
    width: '2.8vmax',
    height: '2.3vmax'
  },
  button: {
    height: '2.5em',
    width: '5.5em',
    borderRadius: '8px',
  },
  links: {
    fontFamily: 'Montserrat',
    fontSize: '1.1vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
  },
  stepperBody: {
    backgroundColor: '#353F3E',
    maxWidth: '100%',
  },
  stepLabel: {
    height: '5vw',
    borderRadius: '5px',
    backgroundColor: '#0c0c0c',
    textAlign: 'center'
  },
  labelText: {
    fontFamily: 'Roboto',
    fontSize: '2.2vmax',
    fontWeight: '400',
    color: '#c6c6c6',
  },
  stepContent: {
    textAlign: 'center'
  },
  contentText: {
    fontFamily: 'Montserrat',
    fontSize: '1.5vmax',
    fontWeight: '400',
    color: '#c6c6c6',
    textAlign: 'center'
  },
  selectButton: {
    marginRight: '1.3%',
    height: '25%',
    width: '30%',
    borderRadius: '3px',
    border: 'none',
    backgroundColor: '#00611C',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    fontFamily: 'Montserrat',
    fontSize: '1.5vmax',
    fontWeight: '800',
    color: '#C1CDC1'
  },
  goBackButton: {
    marginRight: '1.3%',
    marginTop: '1.3%',
    height: '20%',
    width: '25%',
    borderRadius: '3px',
    border: 'none',
    backgroundColor: '#40664D',
    '&:hover': {
      backgroundColor: "#596C56",
    },
    fontFamily: 'Montserrat',
    fontSize: '1.5vmax',
    fontWeight: '800',
    color: '#C1CDC1'
  },
  doneButton: {
    backgroundColor: '#00611C',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    height: '30%',
    width: '25%',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '1.7vmax',
    textTransform: 'none',
    borderRadius: '5px',
    border: 'none',
    color: '#C1CDC1',
  },
  finalLink: {
    fontFamily: 'Montserrat',
    fontSize: '1.2vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
  },
});

class Select extends React.Component {
  componentDidMount() {
    const parsed = queryString.parse(window.location.hash);
    const accessToken = parsed.access_token;
    this.props.dispatch(getUserData(accessToken))
  };

  render() {
    const { classes } = this.props;
    const userName = this.props.user_name;

    let createPlaylistButton;
    if (this.props.activeStep === getSteps().length) {
      createPlaylistButton =
      <div class="animated fadeInDownBig" style={{textAlign: 'center'}}>
        <button variant="contained" className={classes.doneButton}>
          <Link className={classes.links} to="/playlist">GIVE ME SONGS!</Link>
        </button>
      </div>
    };

    let goBackButton;
    if (this.props.activeStep > 0) {
      goBackButton =
      <div class="animated lightSpeedIn">
        <button className={classes.goBackButton} onClick={() => {this.props.dispatch(onBackClick())}}>GO BACK</button>
      </div>
    };

    return (
      <div className={classes.container}>
        <div className={classes.logoItem}>
          <p className={classes.logo}>Electronify</p>
        </div>
        <div className={classes.firstButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/about">ABOUT</Link></Button>
        </div>
        <div className={classes.secondButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/ourteam">TEAM</Link></Button>
        </div>
        <div className={classes.thirdButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/contact">CONTACT</Link></Button>
        </div>

        <div className={classes.firsttitleItem}>
          <p className={classes.firstText}>Good, {userName}! Now, let's get you what you want</p>
        </div>
        <div className={classes.hr}>
          <hr style={{width: '8.5em'}} />
        </div>
        <div className={classes.arrowItem}>
          <img className={classes.arrow} src="./arrow.png" alt="arrow" />
        </div>
        <div className={classes.secondtitleItem}>
          <p className={classes.secondText}>Follow the guide below to define your tune</p>
        </div>
        <div className={classes.stepperItem}>
          <Stepper className={classes.stepperBody} activeStep={this.props.activeStep} orientation="vertical">
            {getSteps().map((label, index) => {
              return (
                <Step className={classes.step} key={label}>
                  <StepLabel icon className={classes.stepLabel}>
                    <p className={classes.labelText}>{label}</p>
                  </StepLabel>
                  <StepContent className={classes.stepContent}>
                    <p className={classes.contentText}>{getStepContent(index)}</p>
                    <div class="animated rollIn" style={{textAlign: 'center'}}>
                      <button className={classes.selectButton} onClick={() => {this.props.dispatch(onDialogOpen())}}>
                        SELECT
                      </button>
                    </div>
                    {goBackButton}
                    <DialogBox
                      handleDialogOpen={() => {this.props.dispatch(onDialogOpen())}}
                      handleDialogClose={() => {this.props.dispatch(onDialogClose())}}
                      handleGenreSelection={(value) => {this.props.dispatch(handleGenreSelection(value))}}
                      handleDanceabilitySelection={(value) => {this.props.dispatch(handleDanceabilitySelection(value))}}
                      handleEnergySelection={(value) => {this.props.dispatch(handleEnergySelection(value))}}
                      handleKeySelection={(value) => {this.props.dispatch(handleKeySelection(value))}}
                      handleLoudnessSelection={(value) => {this.props.dispatch(handleLoudnessSelection(value))}}
                      handleModeSelection={(value) => {this.props.dispatch(handleModeSelection(value))}}
                      handleTempoSelection={(value) => {this.props.dispatch(handleTempoSelection(value))}}
                      handlePositivenessSelection={(value) => {this.props.dispatch(handlePositivenessSelection(value))}}
                      activeStep={this.props.activeStep}
                      dialogOpen={this.props.dialogOpen}
                      genreTitle={this.props.genreTitle}
                      danceabilityTitle={this.props.danceabilityTitle}
                      energyTitle={this.props.energyTitle}
                      keyTitle={this.props.keyTitle}
                      loudnessTitle={this.props.loudnessTitle}
                      modeTitle={this.props.modeTitle}
                      tempoTitle={this.props.tempoTitle}
                      positivenessTitle={this.props.positivenessTitle}
                    />
                  </StepContent>
                </Step>
              );
            })}
            {createPlaylistButton}
          </Stepper>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  state = state.SelectionReducer;
  return {
    user_token: state.user_data.user_token,
    user_name: state.user_data.user_name,
    activeStep: state.select.activeStep,
    dialogOpen: state.select.dialogOpen,
    genre: state.user_selection.genre,
    genreTitle: state.titles.genre,
    danceability: state.user_selection.danceability,
    danceabilityTitle: state.titles.danceability,
    energy: state.user_selection.energy,
    energyTitle: state.titles.energy,
    key: state.user_selection.key,
    keyTitle: state.titles.key,
    loudness: state.user_selection.loudness,
    loudnessTitle: state.titles.loudness,
    mode: state.user_selection.mode,
    modeTitle: state.titles.mode,
    tempo: state.user_selection.tempo,
    tempoTitle: state.titles.tempo,
    positiveness: state.user_selection.positiveness,
    positivenessTitle: state.titles.positiveness
  };
};

Select.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(styles)(Select);
const selectConnected = connect(mapStateToProps)(withstyles);
export default selectConnected;
