import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = boxTheme => ({
  container: {
    display: 'grid',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: '15% 30% 15%',
    gridTemplateColumns: '10% 80% 10%',
    backgroundColor: '#0c0c0c'
  },
  dialog: {
    gridRow: '2 / span 1',
    gridColumn: '2 / span 1',
    width: '100%',
    minWidth: '100%'
  },
  dialogTitleHolder: {
    backgroundColor: '#191919'
  },
  dialogTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '2vw',
    color: '#C1CDC1'
  },
  dialogContent: {
    textAlign: 'center',
    backgroundColor:'#b6b6b6',
    paddingTop: '10%',
    paddingBottom: '10%'
  },
  formControl: {
    width: '100%',
    minWidth: '50%',
    backgroundColor: '#b6b6b6',
    borderRadius: '5px',
    alignItems: 'center'
  },
  textField: {
    margin: 15,
    width: '80%'
  },
  controlLabel: {
    marginBottom: '5%'
  },
  button: {
    backgroundColor: '#3F6826',
    height: '35%',
    width: '40%',
    border: 'none',
    borderRadius: '5px'
  },
  buttonText: {
    color: '#C1CDC1',
    fontFamily: 'Roboto',
    fontWeight: '800',
    fontSize: '1.3vmax'
  }
});


function PlaylistDetailsBox(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Dialog className={classes.dialog} open={true}>
        <DialogTitle className={classes.dialogTitleHolder}>
          <p className={classes.dialogTitle}>Your playlist is almost ready, {props.userName}!</p>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <FormControl className={classes.formControl}>
            <TextField className={classes.textField}
                       value={props.playlistName}
                       label="Playlist Name:"
                       fullWidth
                       onChange={(event) => {props.handleNameChange(event.target.value)}}
                       InputLabelProps={{shrink: true}}/>
            <TextField className={classes.textField}
                       value={props.playlistDescription}
                       label="Playlist Description:"
                       fullWidth
                       multiline
                       rows="3" rowsMax="3"
                       onChange={(event) => {props.handleDescriptionChange(event.target.value)}}
                       InputLabelProps={{shrink: true}}/>
            <FormControlLabel className={classes.controlLabel}
                              label="Private Playlist?"
                              control={<Checkbox
                                          color="default"
                                          checked={props.checkBoxState}
                                          onChange={() => {props.handleClickBox()}}
                                          value="checkedG"/>} />
            <button className={classes.button} onClick={() => {props.handleDetailsSubmit()}}>
              <p className={classes.buttonText}>CREATE!</p>
            </button>
          </FormControl>
        </DialogContent>
      </Dialog>
    </div>
  );
}

PlaylistDetailsBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaylistDetailsBox);
