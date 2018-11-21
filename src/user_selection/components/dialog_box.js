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
    menuItems =
    <Select native onChange={(event) => {props.handleDanceabilitySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={getFractionNumbers()[0]}>{getFractionNumbers()[0]}</option>
      <option value={getFractionNumbers()[1]}>{getFractionNumbers()[1]}</option>
      <option value={getFractionNumbers()[2]}>{getFractionNumbers()[2]}</option>
      <option value={getFractionNumbers()[3]}>{getFractionNumbers()[3]}</option>
      <option value={getFractionNumbers()[4]}>{getFractionNumbers()[4]}</option>
      <option value={getFractionNumbers()[5]}>{getFractionNumbers()[5]}</option>
      <option value={getFractionNumbers()[6]}>{getFractionNumbers()[6]}</option>
      <option value={getFractionNumbers()[7]}>{getFractionNumbers()[7]}</option>
      <option value={getFractionNumbers()[8]}>{getFractionNumbers()[8]}</option>
      <option value={getFractionNumbers()[9]}>{getFractionNumbers()[9]}</option>
      <option value={getFractionNumbers()[10]}>{getFractionNumbers()[10]}</option>
      <option value={getFractionNumbers()[11]}>{getFractionNumbers()[11]}</option>
    </Select>
  };

  if (props.activeStep === 1) {
    titleText = props.acousticnessTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleAcousticnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={getFractionNumbers()[0]}>{getFractionNumbers()[0]}</option>
      <option value={getFractionNumbers()[1]}>{getFractionNumbers()[1]}</option>
      <option value={getFractionNumbers()[2]}>{getFractionNumbers()[2]}</option>
      <option value={getFractionNumbers()[3]}>{getFractionNumbers()[3]}</option>
      <option value={getFractionNumbers()[4]}>{getFractionNumbers()[4]}</option>
      <option value={getFractionNumbers()[5]}>{getFractionNumbers()[5]}</option>
      <option value={getFractionNumbers()[6]}>{getFractionNumbers()[6]}</option>
      <option value={getFractionNumbers()[7]}>{getFractionNumbers()[7]}</option>
      <option value={getFractionNumbers()[8]}>{getFractionNumbers()[8]}</option>
      <option value={getFractionNumbers()[9]}>{getFractionNumbers()[9]}</option>
      <option value={getFractionNumbers()[10]}>{getFractionNumbers()[10]}</option>
      <option value={getFractionNumbers()[11]}>{getFractionNumbers()[11]}</option>
    </Select>
  };

  if (props.activeStep === 2) {
    titleText = props.energyTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleEnergySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={getFractionNumbers()[0]}>{getFractionNumbers()[0]}</option>
      <option value={getFractionNumbers()[1]}>{getFractionNumbers()[1]}</option>
      <option value={getFractionNumbers()[2]}>{getFractionNumbers()[2]}</option>
      <option value={getFractionNumbers()[3]}>{getFractionNumbers()[3]}</option>
      <option value={getFractionNumbers()[4]}>{getFractionNumbers()[4]}</option>
      <option value={getFractionNumbers()[5]}>{getFractionNumbers()[5]}</option>
      <option value={getFractionNumbers()[6]}>{getFractionNumbers()[6]}</option>
      <option value={getFractionNumbers()[7]}>{getFractionNumbers()[7]}</option>
      <option value={getFractionNumbers()[8]}>{getFractionNumbers()[8]}</option>
      <option value={getFractionNumbers()[9]}>{getFractionNumbers()[9]}</option>
      <option value={getFractionNumbers()[10]}>{getFractionNumbers()[10]}</option>
      <option value={getFractionNumbers()[11]}>{getFractionNumbers()[11]}</option>
    </Select>
  };

  if (props.activeStep === 3) {
    titleText = props.instrumentalnessTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleInstrumentalnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={getFractionNumbers()[0]}>{getFractionNumbers()[0]}</option>
      <option value={getFractionNumbers()[1]}>{getFractionNumbers()[1]}</option>
      <option value={getFractionNumbers()[2]}>{getFractionNumbers()[2]}</option>
      <option value={getFractionNumbers()[3]}>{getFractionNumbers()[3]}</option>
      <option value={getFractionNumbers()[4]}>{getFractionNumbers()[4]}</option>
      <option value={getFractionNumbers()[5]}>{getFractionNumbers()[5]}</option>
      <option value={getFractionNumbers()[6]}>{getFractionNumbers()[6]}</option>
      <option value={getFractionNumbers()[7]}>{getFractionNumbers()[7]}</option>
      <option value={getFractionNumbers()[8]}>{getFractionNumbers()[8]}</option>
      <option value={getFractionNumbers()[9]}>{getFractionNumbers()[9]}</option>
      <option value={getFractionNumbers()[10]}>{getFractionNumbers()[10]}</option>
      <option value={getFractionNumbers()[11]}>{getFractionNumbers()[11]}</option>
    </Select>
  };

  if (props.activeStep === 4) {
    const values = getKeyOptions();
    titleText = props.keyTitle;
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
    menuItems =
    <Select native onChange={(event) => {props.handleLoudnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={getLoudnessOptions()[0]}>{getLoudnessOptions()[0]}</option>
      <option value={getLoudnessOptions()[1]}>{getLoudnessOptions()[1]}</option>
      <option value={getLoudnessOptions()[2]}>{getLoudnessOptions()[2]}</option>
      <option value={getLoudnessOptions()[3]}>{getLoudnessOptions()[3]}</option>
      <option value={getLoudnessOptions()[4]}>{getLoudnessOptions()[4]}</option>
      <option value={getLoudnessOptions()[5]}>{getLoudnessOptions()[5]}</option>
    </Select>
  };

  if (props.activeStep === 6) {
    titleText = props.modeTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleModeSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={getModeOptions()[0]}>{getModeOptions()[0]}</option>
      <option value={getModeOptions()[1]}>{getModeOptions()[1]}</option>
      <option value={getModeOptions()[2]}>{getModeOptions()[2]}</option>
    </Select>
  };

  if (props.activeStep === 7) {
    titleText = props.popularityTitle;
    menuItems =
    <Select native onChange={(event) => {props.handlePopularitySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={getPopularityNumbers()[0]}>{getPopularityNumbers()[0]}</option>
      <option value={getPopularityNumbers()[1]}>{getPopularityNumbers()[1]}</option>
      <option value={getPopularityNumbers()[2]}>{getPopularityNumbers()[2]}</option>
      <option value={getPopularityNumbers()[3]}>{getPopularityNumbers()[3]}</option>
      <option value={getPopularityNumbers()[4]}>{getPopularityNumbers()[4]}</option>
      <option value={getPopularityNumbers()[5]}>{getPopularityNumbers()[5]}</option>
      <option value={getPopularityNumbers()[6]}>{getPopularityNumbers()[6]}</option>
      <option value={getPopularityNumbers()[7]}>{getPopularityNumbers()[7]}</option>
      <option value={getPopularityNumbers()[8]}>{getPopularityNumbers()[8]}</option>
      <option value={getPopularityNumbers()[9]}>{getPopularityNumbers()[9]}</option>
      <option value={getPopularityNumbers()[10]}>{getPopularityNumbers()[10]}</option>
      <option value={getPopularityNumbers()[11]}>{getPopularityNumbers()[11]}</option>
      <option value={getPopularityNumbers()[12]}>{getPopularityNumbers()[12]}</option>
    </Select>
  };

  if (props.activeStep === 8) {
    titleText = props.tempoTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleTempoSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      <option value={getBpmOptions()[0]}>{getBpmOptions()[0]}</option>
      <option value={getBpmOptions()[1]}>{getBpmOptions()[1]}</option>
      <option value={getBpmOptions()[2]}>{getBpmOptions()[2]}</option>
      <option value={getBpmOptions()[3]}>{getBpmOptions()[3]}</option>
      <option value={getBpmOptions()[4]}>{getBpmOptions()[4]}</option>
      <option value={getBpmOptions()[5]}>{getBpmOptions()[5]}</option>
      <option value={getBpmOptions()[6]}>{getBpmOptions()[6]}</option>
      <option value={getBpmOptions()[7]}>{getBpmOptions()[7]}</option>
      <option value={getBpmOptions()[8]}>{getBpmOptions()[8]}</option>
    </Select>
  };

  if (props.activeStep === 9) {
    titleText = props.valenceTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleValenceSelection(event.target.value)}} input={<Input />} >
      <option value="" />
        <option value={getFractionNumbers()[0]}>{getFractionNumbers()[0]}</option>
        <option value={getFractionNumbers()[1]}>{getFractionNumbers()[1]}</option>
        <option value={getFractionNumbers()[2]}>{getFractionNumbers()[2]}</option>
        <option value={getFractionNumbers()[3]}>{getFractionNumbers()[3]}</option>
        <option value={getFractionNumbers()[4]}>{getFractionNumbers()[4]}</option>
        <option value={getFractionNumbers()[5]}>{getFractionNumbers()[5]}</option>
        <option value={getFractionNumbers()[6]}>{getFractionNumbers()[6]}</option>
        <option value={getFractionNumbers()[7]}>{getFractionNumbers()[7]}</option>
        <option value={getFractionNumbers()[8]}>{getFractionNumbers()[8]}</option>
        <option value={getFractionNumbers()[9]}>{getFractionNumbers()[9]}</option>
        <option value={getFractionNumbers()[10]}>{getFractionNumbers()[10]}</option>
        <option value={getFractionNumbers()[11]}>{getFractionNumbers()[11]}</option>
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
