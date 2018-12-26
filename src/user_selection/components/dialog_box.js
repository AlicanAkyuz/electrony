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
import { getGenres,
         getDanceability,
         getEnergy,
         getBpmOptions,
         getLoudnessOptions,
         getPositiveness
       } from './dialog_functions';

const styles = dialogTheme => ({
  dialogTitle: {
    backgroundColor: '#191919',
    padding: '7%'
  },
  popUpTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    color: '#C1CDC1'
  },
  dialogContent: {
    textAlign: 'center',
    backgroundColor:'#0c0c0c',
    paddingTop: '10%',
  },
  formControl: {
    width: '80%',
    minWidth: '70%',
    backgroundColor: '#CFDBC5',
    borderRadius: '5px'
  }
});

function DialogBox(props) {
  const { classes } = props;
  let titleText;
  let menuItems;

  if (props.activeStep === 0) {
    titleText = props.genreTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleGenreSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getGenres().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 1) {
    titleText = props.danceabilityTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleDanceabilitySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getDanceability().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 2) {
    titleText = props.energyTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleEnergySelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getEnergy().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 3) {
    titleText = props.loudnessTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleLoudnessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getLoudnessOptions().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 4) {
    titleText = props.tempoTitle;
    menuItems =
    <Select native onChange={(event) => {props.handleTempoSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getBpmOptions().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  if (props.activeStep === 5) {
    titleText = props.positivenessTitle;
    menuItems =
    <Select native onChange={(event) => {props.handlePositivenessSelection(event.target.value)}} input={<Input />} >
      <option value="" />
      {getPositiveness().map(e => <option key={shortid.generate()} value={e}>{e}</option>)}
    </Select>
  };

  return (
    <Dialog onBackdropClick={() => {props.handleBackdropClick()}}
            onEscapeKeyDown={() => {props.handleBackdropClick()}} 
            open={props.dialogOpen}>
      <DialogTitle className={classes.dialogTitle}>
        <p className={classes.popUpTitle}>{titleText}</p>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <FormControl onChange={() => {props.handleDialogClose()}} className={classes.formControl}>
          {menuItems}
        </FormControl>
      </DialogContent>
    </Dialog>
  );
}

DialogBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogBox);
