import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
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
    alignItems: 'center'
  },
  buttonHolder: {
    borderRadius: '15px'
  },
  stepperBody: {
    backgroundColor: 'black',
    minWidth: '550px'
  },
  step: {
    borderRadius: '5px',
    backgroundColor: 'black',
  },
  stepLabel: {
    height: '60px',
    borderRadius: '3px',
    backgroundColor: '#191919',
    display: 'flex',
  },
  labelTypography: {
    useNextVariants: true,
    fontFamily: 'Montserrat',
    fontSize: '32px',
    color: '#c5c5c5',
  },
  contentTypography: {
    useNextVariants: true,
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

                <StepLabel className={classes.stepLabel}>
                  <Typography className={classes.labelTypography}>
                    {label}
                  </Typography>
                </StepLabel>

                <StepContent className={classes.stepContent}>
                  <Typography className={classes.contentTypography}>
                    {getStepContent(index)}
                  </Typography>
                  <div className={classes.actionsContainer}>
                    <button className={classes.selectButton} onClick={() => {props.handleDialogOpen()}} >
                      <Typography className={classes.selectTypography}>
                        Select
                      </Typography>
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
