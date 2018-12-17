import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { getSteps, getStepContent } from './stepper_functions';
import DialogBox from './dialog_box';

const stepperStyles = stepperStyles => ({
  container: {
    display: 'grid',
    width: '100%',
    gridTemplateRows: '85% 15%',
    gridTemplateColumns: '15% 70% 15%',
    backgroundColor: '#0c0c0c'
  },
  stepperItem: {
    gridColumn: '2 / span 1',
    gridRow: '1 / span 1',
  },
  buttonItem: {
    gridColumn: '2 / span 1',
    gridRow: '2 / span 1',
    placeSelf: 'center'
  },
  stepperBody: {
    backgroundColor: '#353F3E',
    borderRadius: '5px',
    minWidth: '60%',
  },
  stepLabel: {
    height: '5vw',
    borderRadius: '5px',
    backgroundColor: '#0c0c0c',
    textAlign: 'center'
  },
  labelText: {
    fontFamily: 'Roboto',
    fontSize: '3vw',
    fontWeight: '400',
    color: '#c6c6c6',
  },
  stepContent: {
    textAlign: 'center'
  },
  contentText: {
    fontFamily: 'Montserrat',
    fontSize: '1.5vw',
    fontWeight: '400',
    color: '#c6c6c6',
    textAlign: 'center'
  },
  selectButton: {
    marginRight: '1.5%',
    height: '33%',
    width: '38%',
    backgroundColor: '#00611C',
    borderRadius: '5px',
    border: 'none',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    fontFamily: 'Montserrat',
    fontSize: '1.5vw',
    fontWeight: '800',
    color: '#C1CDC1'
  },




  buttonHolder: {
    borderRadius: '15px',
    marginTop: '3%',
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

  let createPlaylistButton;
  props.activeStep === getSteps().length ?
    createPlaylistButton =
    <Button variant="contained" onClick={() => props.handleSelectionSubmit()} size="large" className={classes.doneButton}>
      GIVE ME SONGS!
    </Button> :
    createPlaylistButton =
    <Button variant="contained" size="large" className={classes.disabledDoneButton}>
      MAKE YOUR CHOICES!
    </Button>;

  return (
    <div className={classes.container}>
      <div className={classes.stepperItem}>
        <Stepper className={classes.stepperBody} activeStep={props.activeStep} orientation="vertical">
          {getSteps().map((label, index) => {
            return (
              <Step className={classes.step} key={label}>

                <StepLabel icon className={classes.stepLabel}>
                  <p className={classes.labelText}>{label}</p>
                </StepLabel>

                <StepContent className={classes.stepContent}>
                  <p className={classes.contentText}>{getStepContent(index)}</p>
                  <button className={classes.selectButton} onClick={() => {props.handleDialogOpen()}}>
                    SELECT
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
      </div>

      <div className={classes.buttonItem}>
        {createPlaylistButton}
      </div>

    </div>
  )
};

SelectionStepper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(stepperStyles)(SelectionStepper);
