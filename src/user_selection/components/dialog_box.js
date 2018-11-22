import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { getFractionNumbers,
         getBpmOptions,
         getKeyOptions,
         getLoudnessOptions,
         getModeOptions,
         getPopularityNumbers } from './dialog_functions';

const styles = dialogTheme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: dialogTheme.spacing.unit,
    minWidth: 400,
    backgroundColor: '#e5e5e5',
    borderRadius: '5px'
  },
  extendedIcon: {
    marginRight: dialogTheme.spacing.unit,
  },
  dialogHolder: {
    backgroundColor: '#191919',
    display: 'flex',
    justifyContent: 'center'
  },
  popUpTitle: {
    useNextVariants: true,
    fontFamily: 'Roboto',
    fontSize: '18px',
    color: '#e5e5e5'
  },
  dialogContent: {
    backgroundColor:'#191919',
  }
});

function DialogBox(props) {
  const { classes } = props;
  let titleText;
  let menuItems;

  if (props.activeStep === 0) {
    titleText = props.danceabilityTitle;
    const values = getFractionNumbers();
    menuItems =
    <Select native onChange={(event) => {props.handleDanceabilitySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={values[0]}>{values[0]}</option>
      <option value={values[1]}>{values[1]}</option>
      <option value={values[2]}>{values[2]}</option>
      <option value={values[3]}>{values[3]}</option>
      <option value={values[4]}>{values[4]}</option>
      <option value={values[5]}>{values[5]}</option>
      <option value={values[6]}>{values[6]}</option>
      <option value={values[7]}>{values[7]}</option>
      <option value={values[8]}>{values[8]}</option>
      <option value={values[9]}>{values[9]}</option>
      <option value={values[10]}>{values[10]}</option>
      <option value={values[11]}>{values[11]}</option>
    </Select>
  };


  if (props.activeStep === 1) {
    titleText = props.acousticnessTitle;
    const values = getFractionNumbers();
    menuItems =
    <Select native onChange={(event) => {props.handleAcousticnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={values[0]}>{values[0]}</option>
      <option value={values[1]}>{values[1]}</option>
      <option value={values[2]}>{values[2]}</option>
      <option value={values[3]}>{values[3]}</option>
      <option value={values[4]}>{values[4]}</option>
      <option value={values[5]}>{values[5]}</option>
      <option value={values[6]}>{values[6]}</option>
      <option value={values[7]}>{values[7]}</option>
      <option value={values[8]}>{values[8]}</option>
      <option value={values[9]}>{values[9]}</option>
      <option value={values[10]}>{values[10]}</option>
      <option value={values[11]}>{values[11]}</option>
    </Select>
  };

  if (props.activeStep === 2) {
    titleText = props.energyTitle;
    const values = getFractionNumbers();
    menuItems =
    <Select native onChange={(event) => {props.handleEnergySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={values[0]}>{values[0]}</option>
      <option value={values[1]}>{values[1]}</option>
      <option value={values[2]}>{values[2]}</option>
      <option value={values[3]}>{values[3]}</option>
      <option value={values[4]}>{values[4]}</option>
      <option value={values[5]}>{values[5]}</option>
      <option value={values[6]}>{values[6]}</option>
      <option value={values[7]}>{values[7]}</option>
      <option value={values[8]}>{values[8]}</option>
      <option value={values[9]}>{values[9]}</option>
      <option value={values[10]}>{values[10]}</option>
      <option value={values[11]}>{values[11]}</option>
    </Select>
  };

  if (props.activeStep === 3) {
    titleText = props.instrumentalnessTitle;
    const values = getFractionNumbers();
    menuItems =
    <Select native onChange={(event) => {props.handleInstrumentalnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={values[0]}>{values[0]}</option>
      <option value={values[1]}>{values[1]}</option>
      <option value={values[2]}>{values[2]}</option>
      <option value={values[3]}>{values[3]}</option>
      <option value={values[4]}>{values[4]}</option>
      <option value={values[5]}>{values[5]}</option>
      <option value={values[6]}>{values[6]}</option>
      <option value={values[7]}>{values[7]}</option>
      <option value={values[8]}>{values[8]}</option>
      <option value={values[9]}>{values[9]}</option>
      <option value={values[10]}>{values[10]}</option>
      <option value={values[11]}>{values[11]}</option>
    </Select>
  };

  if (props.activeStep === 4) {
    titleText = props.keyTitle;
    const values = getKeyOptions();
    menuItems =
    <Select native onChange={(event) => {props.handleKeySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={values[0]}>{values[0]}</option>
      <option value={values[1]}>{values[1]}</option>
      <option value={values[2]}>{values[2]}</option>
      <option value={values[3]}>{values[3]}</option>
      <option value={values[4]}>{values[4]}</option>
      <option value={values[5]}>{values[5]}</option>
      <option value={values[6]}>{values[6]}</option>
      <option value={values[7]}>{values[7]}</option>
      <option value={values[8]}>{values[8]}</option>
      <option value={values[9]}>{values[9]}</option>
      <option value={values[10]}>{values[10]}</option>
      <option value={values[11]}>{values[11]}</option>
      <option value={values[12]}>{values[12]}</option>
    </Select>
  };

  if (props.activeStep === 5) {
    titleText = props.loudnessTitle;
    const values = getLoudnessOptions();
    menuItems =
    <Select native onChange={(event) => {props.handleLoudnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={values[0]}>{values[0]}</option>
      <option value={values[1]}>{values[1]}</option>
      <option value={values[2]}>{values[2]}</option>
      <option value={values[3]}>{values[3]}</option>
      <option value={values[4]}>{values[4]}</option>
      <option value={values[5]}>{values[5]}</option>
    </Select>
  };

  if (props.activeStep === 6) {
    titleText = props.modeTitle;
    const values = getModeOptions();
    menuItems =
    <Select native onChange={(event) => {props.handleModeSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={values[0]}>{values[0]}</option>
      <option value={values[1]}>{values[1]}</option>
      <option value={values[2]}>{values[2]}</option>
    </Select>
  };

  if (props.activeStep === 7) {
    titleText = props.popularityTitle;
    const values = getPopularityNumbers();
    menuItems =
    <Select native onChange={(event) => {props.handlePopularitySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={values[0]}>{values[0]}</option>
      <option value={values[1]}>{values[1]}</option>
      <option value={values[2]}>{values[2]}</option>
      <option value={values[3]}>{values[3]}</option>
      <option value={values[4]}>{values[4]}</option>
      <option value={values[5]}>{values[5]}</option>
      <option value={values[6]}>{values[6]}</option>
      <option value={values[7]}>{values[7]}</option>
      <option value={values[8]}>{values[8]}</option>
      <option value={values[9]}>{values[9]}</option>
      <option value={values[10]}>{values[10]}</option>
      <option value={values[11]}>{values[11]}</option>
      <option value={values[12]}>{values[12]}</option>
    </Select>
  };

  if (props.activeStep === 8) {
    titleText = props.tempoTitle;
    const values = getBpmOptions();
    menuItems =
    <Select native onChange={(event) => {props.handleTempoSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={values[0]}>{values[0]}</option>
      <option value={values[1]}>{values[1]}</option>
      <option value={values[2]}>{values[2]}</option>
      <option value={values[3]}>{values[3]}</option>
      <option value={values[4]}>{values[4]}</option>
      <option value={values[5]}>{values[5]}</option>
      <option value={values[6]}>{values[6]}</option>
      <option value={values[7]}>{values[7]}</option>
      <option value={values[8]}>{values[8]}</option>
    </Select>
  };

  if (props.activeStep === 9) {
    titleText = props.valenceTitle;
    const values = getFractionNumbers();
    menuItems =
    <Select native onChange={(event) => {props.handleValenceSelection(event.target.value)}} input={<Input />} >
      <option value="" />
        <option value={values[0]}>{values[0]}</option>
        <option value={values[1]}>{values[1]}</option>
        <option value={values[2]}>{values[2]}</option>
        <option value={values[3]}>{values[3]}</option>
        <option value={values[4]}>{values[4]}</option>
        <option value={values[5]}>{values[5]}</option>
        <option value={values[6]}>{values[6]}</option>
        <option value={values[7]}>{values[7]}</option>
        <option value={values[8]}>{values[8]}</option>
        <option value={values[9]}>{values[9]}</option>
        <option value={values[10]}>{values[10]}</option>
        <option value={values[11]}>{values[11]}</option>
    </Select>
  };

  return (
    <div>
      <Dialog className={classes.dialogBox} open={props.dialogOpen}>
        <DialogTitle className={classes.dialogHolder}>
          <Typography className={classes.popUpTitle}>
            {titleText}
          </Typography>
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>
          <form className={classes.container}>
            <FormControl onChange={() => {props.handleDialogClose()}} className={classes.formControl}>
              {menuItems}
            </FormControl>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

DialogBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogBox);
