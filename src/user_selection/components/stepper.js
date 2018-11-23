import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Grid from '@material-ui/core/Grid';
import MyButton from '../../components/myButton';
import { getSteps, getStepContent } from './stepper_functions';
import DialogBox from './dialog_box';

const stepperStyles = stepperStyles => ({
  root: {
    width: '100%',
    minWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  buttonHolder: {
    borderRadius: '15px'
  },
  stepperBody: {
    backgroundColor: 'black',
    minWidth: '650px'
  },
  step: {
    borderRadius: '5px',
    backgroundColor: 'black',
  },
  stepLabel: {
    height: '100px',
    borderRadius: '3px',
    backgroundColor: '#191919',
  },
  labelHolder: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  label: {
    width: '70%',
    fontFamily: 'Montserrat',
    fontSize: '32px',
    color: '#c5c5c5',
  },
  labelSelected: {
    width: '30%',
    fontFamily: 'Roboto',
    fontSize: '32px',
    textAlign: 'center',
    color: '#7D2C1A',
  },
  contentTypography: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    color: '#c6c6c6'
  },
  actionsContainer: {
    marginTop: stepperStyles.spacing.unit * 4,
    marginBottom: stepperStyles.spacing.unit * 2,
  },
  selectButton: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '2%',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#7D2C1A',
    '&:hover': {
      backgroundColor: "#7D1C05",
    },
  },
  selectTypography: {
    useNextVariants: true,
    fontFamily: 'Roboto',
    fontSize: '18px',
    textTransform: 'none',
    color: '#cccccc',
    marginRight: '15px',
    marginLeft: '15px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  selectLabelIcon: {
    backgroundColor: 'orange'
  }
});

function SelectionStepper(props) {
  const { classes } = props;

  let createPlaylistButton;
  props.activeStep === getSteps().length ?
    createPlaylistButton =
      <MyButton
        page="/playlist"
        text="Create playlist"
        position="center"
        sendFetch={props.sendFetch} /> :
    createPlaylistButton =
      <MyButton
        page="/playlist"
        text="Create playlist"
        isDisabled="disabled"
        position="center" />

  return (
    <div className={classes.root}>
      <Grid>
        <Stepper className={classes.stepperBody} activeStep={props.activeStep} orientation="vertical">
          {getSteps().map((label, index) => {
            return (
              <Step className={classes.step} key={label}>

                <StepLabel icon className={classes.stepLabel}>
                  <Grid className={classes.labelHolder} item xs={12}>
                    <p className={classes.label}>
                      Step {index + 1}: {label}
                    </p>
                    <p className={classes.labelSelected}>
                      {index === 0 ? props.danceability : null}
                      {index === 1 ? props.acousticness : null}
                      {index === 2 ? props.energy : null}
                      {index === 3 ? props.instrumentalness : null}
                      {index === 4 ? props.key : null}
                      {index === 5 ? props.loudness : null}
                      {index === 6 ? props.mode : null}
                      {index === 7 ? props.popularity : null}
                      {index === 8 ? props.tempo : null}
                      {index === 9 ? props.valence : null}
                    </p>
                  </Grid>
                </StepLabel>

                <StepContent className={classes.stepContent}>
                  <p className={classes.contentTypography}>
                    {getStepContent(index)}
                  </p>
                  <div className={classes.actionsContainer}>
                    <button className={classes.selectButton} onClick={() => {props.handleDialogOpen()}} >
                      <p className={classes.selectTypography}>
                        Select
                      </p>
                    </button>
                    <DialogBox
                      handleDialogOpen={props.handleDialogOpen}
                      handleDialogClose={props.handleDialogClose}
                      handleDanceabilitySelection={props.handleDanceabilitySelection}
                      handleAcousticnessSelection={props.handleAcousticnessSelection}
                      handleEnergySelection={props.handleEnergySelection}
                      handleInstrumentalnessSelection={props.handleInstrumentalnessSelection}
                      handleKeySelection={props.handleKeySelection}
                      handleLoudnessSelection={props.handleLoudnessSelection}
                      handleModeSelection={props.handleModeSelection}
                      handlePopularitySelection={props.handlePopularitySelection}
                      handleTempoSelection={props.handleTempoSelection}
                      handleValenceSelection={props.handleValenceSelection}
                      activeStep={props.activeStep}
                      dialogOpen={props.dialogOpen}
                      danceability={props.danceability}
                      danceabilityTitle={props.danceabilityTitle}
                      acousticnessTitle={props.acousticnessTitle}
                      energyTitle={props.energyTitle}
                      instrumentalnessTitle={props.instrumentalnessTitle}
                      keyTitle={props.keyTitle}
                      loudnessTitle={props.loudnessTitle}
                      modeTitle={props.modeTitle}
                      popularityTitle={props.popularityTitle}
                      tempoTitle={props.tempoTitle}
                      valenceTitle={props.valenceTitle}
                    />
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
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
