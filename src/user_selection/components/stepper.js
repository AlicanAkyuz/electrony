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
  },
  button: {
    margin: stepperStyles.spacing.unit,
    backgroundColor: '#7D2C1A',
    '&:hover': {
      backgroundColor: "#7D1C05",
    },
  },
  disabledButton: {
    margin: stepperStyles.spacing.unit,
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: "gray",
    },
    fontFamily: 'Montserrat',
    fontSize: '13px',
    textTransform: 'none',
    color: '#e5e5e5',
  },
});

function SelectionStepper(props) {
  const { classes } = props;
  let parsed = queryString.parse(window.location.hash);
  let accessToken = parsed.access_token;

  let createPlaylistButton;
  props.activeStep === getSteps().length ?
    createPlaylistButton =
    <Button variant="contained" onClick={() => props.handleSelectionSubmit(accessToken)} size="large" className={classes.button}>
      Diversify
    </Button> :
    createPlaylistButton =
    <Button variant="contained" size="large" className={classes.disabledButton}>
      Disabled
    </Button>;

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
                      {index === 0 ? props.genre : null}
                      {index === 1 ? props.danceability : null}
                      {index === 2 ? props.energy : null}
                      {index === 3 ? props.key : null}
                      {index === 4 ? props.loudness : null}
                      {index === 5 ? props.mode : null}
                      {index === 6 ? props.tempo : null}
                      {index === 7 ? props.valence : null}
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
