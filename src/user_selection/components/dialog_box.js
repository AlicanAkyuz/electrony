import React from 'react';
import shortid from 'shortid';
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
      {getFractionNumbers().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 1) {
    titleText = props.acousticnessTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleAcousticnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getFractionNumbers().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 2) {
    titleText = props.energyTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleEnergySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getFractionNumbers().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 3) {
    titleText = props.instrumentalnessTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleInstrumentalnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getFractionNumbers().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 4) {
    titleText = props.keyTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleKeySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getKeyOptions().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 5) {
    titleText = props.loudnessTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleLoudnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getLoudnessOptions().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 6) {
    titleText = props.modeTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleModeSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getModeOptions().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 7) {
    titleText = props.popularityTitle;
    menuItems =
    <Select native onChange={(event) => {props.handlePopularitySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getPopularityNumbers().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 8) {
    titleText = props.tempoTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleTempoSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getBpmOptions().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 9) {
    titleText = props.valenceTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleValenceSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getFractionNumbers().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
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
