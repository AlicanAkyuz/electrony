import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
});

function PlaylistDetailsBox(props) {
  const { classes } = props;

  return (
    <div>
      <Dialog className={classes.dialogBox} open={true}>
        <DialogTitle className={classes.dialogHolder}>
          <Typography className={classes.popUpTitle}>
            What would you like to name this playlist, {props.userName}?
          </Typography>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <FormControl className={classes.formControl}>
            <TextField
              value={props.playlistName}
              onChange={(event) => {props.handleNameChange(event.target.value)}}
              label="Playlist Name:"
              style={{ margin: 10 }}
              required
              placeholder="My Electonic Vibes"
              helperText="Choose a name for your playlist!"
              fullWidth
              InputLabelProps={{shrink: true}}/>

            <TextField
              value={props.playlistDescription}
              onChange={(event) => {props.handleDescriptionChange(event.target.value)}}
              label="Description:"
              style={{ margin: 10 }}
              required
              placeholder="Description"
              helperText="Descripe your playlist with a couple of words."
              fullWidth
              InputLabelProps={{shrink: true}}/>

          <p className={classes.selectTypography}>Click the Button, if you prefer this to be a private playlist.</p>
            <FormControlLabel
              label="Private?"
              control={
              <Checkbox
                checked={props.checkBoxState}
                onChange={() => {props.handleClickBox()}}
                value="checkedG"
                classes={{root: classes.root,checked: classes.checked}} />} />


          <button className={classes.selectButton} onClick={() => {props.handleDetailsSubmit()}} >
            <p className={classes.selectTypography}>DONE!</p>
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
