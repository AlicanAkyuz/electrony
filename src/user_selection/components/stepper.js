import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { getSteps, getStepContent } from './stepper_functions';
import DialogBox from './dialog_box';
import queryString from 'query-string';

const stepperStyles = stepperStyles => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'black'
  },
  stepperBody: {
    backgroundColor: '#353F3E',
    borderRadius: '10px',
    minWidth: '80%',
  },
  stepLabel: {
    height: '60px',
    borderRadius: '10px',
    backgroundColor: '#0c0c0c',
    textAlign: 'center'
  },
  step: {
    borderRadius: '5px',
    backgroundColor: '#353F3E',
  },
  label: {
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: '25px',
    fontWeight: '400',
    color: '#c6c6c6',
  },
  contentText: {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '400',
    color: '#c6c6c6'
  },
  buttonHolder: {
    borderRadius: '15px',
    marginTop: '3%',
  },
  selectButton: {
    height: '45px',
    width: '150px',
    backgroundColor: '#00611C',
    border: 'none',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    fontFamily: 'Roboto',
    fontSize: '17px',
    fontWeight: '400',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#F0FFF0'
  },
  doneButton: {
    margin: stepperStyles.spacing.unit,
    backgroundColor: '#00611C',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    fontFamily: 'Roboto',
    fontSize: '16px',
    textTransform: 'none',
    color: '#e5e5e5',
  },
  disabledDoneButton: {
    margin: stepperStyles.spacing.unit,
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: "gray",
    },
    fontFamily: 'Roboto',
    fontSize: '13px',
    textTransform: 'none',
    color: '#e5e5e5',
  },
});

function SelectionStepper(props) {
  const { classes } = props;
  const parsed = queryString.parse(window.location.hash);
  const accessToken = parsed.access_token;

  let createPlaylistButton;
  props.activeStep === getSteps().length ?
    createPlaylistButton =
    <Button variant="contained" onClick={() => props.handleSelectionSubmit(accessToken)} size="large" className={classes.doneButton}>
      GIVE ME SONGS!
    </Button> :
    createPlaylistButton =
    <Button variant="contained" size="large" className={classes.disabledDoneButton}>
      MAKE YOUR CHOICES!
    </Button>;

  return (
    <div className={classes.root}>
      <Stepper className={classes.stepperBody} activeStep={props.activeStep} orientation="vertical">
        {getSteps().map((label, index) => {
          return (
            <Step className={classes.step} key={label}>

              <StepLabel icon className={classes.stepLabel}>
                  <h2 className={classes.label}>Step {index + 1}: {label}</h2>
              </StepLabel>

              <StepContent className={classes.stepContent}>
                <h3 className={classes.contentText}>
                  {getStepContent(index)}
                </h3>
                <button className={classes.selectButton} onClick={() => {props.handleDialogOpen()}} >
                  Select
                </button>
                <DialogBox
                  handleDialogOpen={props.handleDialogOpen}
                  handleDialogClose={props.handleDialogClose}
                  handleDanceabilitySelection={props.handleDanceabilitySelection}
                  handleGenreSelection={props.handleGenreSelection}
                  handleEnergySelection={props.handleEnergySelection}
                  handleKeySelection={props.handleKeySelection}
                  handleLoudnessSelection={props.handleLoudnessSelection}
                  handleModeSelection={props.handleModeSelection}
                  handleTempoSelection={props.handleTempoSelection}
                  handlePositivenessSelection={props.handlePositivenessSelection}
                  activeStep={props.activeStep}
                  dialogOpen={props.dialogOpen}
                  genreTitle={props.genreTitle}
                  danceabilityTitle={props.danceabilityTitle}
                  energyTitle={props.energyTitle}
                  keyTitle={props.keyTitle}
                  loudnessTitle={props.loudnessTitle}
                  modeTitle={props.modeTitle}
                  tempoTitle={props.tempoTitle}
                  positivenessTitle={props.valenceTitle}
                />
              </StepContent>
            </Step>
          );
        })}
      </Stepper>

      <Grid className={classes.buttonHolder} item xs={12}>
        {createPlaylistButton}
      </Grid>
    </div>
  )
};

SelectionStepper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(stepperStyles)(SelectionStepper);
