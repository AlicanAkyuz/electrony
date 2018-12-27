import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = boxTheme => ({
  container: {
    display: 'grid',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: '20% 60% 20%',
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
    backgroundColor: '#191919',
    padding: '10%'
  },
  dialogTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    color: '#C1CDC1'
  },
  dialogContent: {
    textAlign: 'center',
    backgroundColor:'#F0FFF0',
    paddingTop: '10%',
    paddingBottom: '10%'
  },
  formControl: {
    width: '100%',
    minWidth: '50%',
    backgroundColor: '#F0FFF0',
    borderRadius: '5px',
    alignItems: 'center'
  },
  textField: {
    margin: 15,
    width: '80%',
    backgroundColor: '#F0FFF0',
    borderRadius: '5px',
  },
  controlLabel: {
    marginBottom: '5%',
  },
  button: {
    backgroundColor: '#00611C',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
    fontFamily: 'Montserrat',
    fontWeight: '800',
    textTransform: 'none',
    borderRadius: '5px',
    color: '#C1CDC1',
  }
});


function PlaylistDetailsBox(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Dialog className={classes.dialog}
              open={true}
              onBackdropClick={() => {props.handleEscape()}}
              onEscapeKeyDown={() => {props.handleEscape()}}>
        <DialogTitle className={classes.dialogTitleHolder}>
          <Typography className={classes.dialogTitle}>Give your playlist a name and description</Typography>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <FormControl className={classes.formControl}>
            <TextField className={classes.textField}
                       value={props.playlistName}
                       label="Playlist Name:"
                       fullWidth
                       variant="filled"
                       onChange={(event) => {props.handleNameChange(event.target.value)}}
                       InputLabelProps={{shrink: true}}/>
            <TextField className={classes.textField}
                       value={props.playlistDescription}
                       label="Playlist Description:"
                       fullWidth
                       multiline
                       variant="filled"
                       rows="3" rowsMax="3"
                       onChange={(event) => {props.handleDescriptionChange(event.target.value)}}
                       InputLabelProps={{shrink: true}}/>
            <FormControlLabel className={classes.controlLabel}
                              label="Private Playlist?"
                              control={<Checkbox
                                          className={classes.checkBox}
                                          checked={props.checkBoxState}
                                          onChange={() => {props.handleClickBox()}}
                                          value="checkedG"/>} />
            <Button size="large" variant="contained" className={classes.button}
                    onClick={() => {props.handleDetailsSubmit()}}>
              CREATE!
            </Button>



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
