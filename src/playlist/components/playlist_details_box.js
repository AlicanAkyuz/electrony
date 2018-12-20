import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function PlaylistDetailsBox(props) {
  return (
    <div style={{display: 'grid', height: 'auto', minHeight: '100vh', gridTemplateRows: '15% 30% 15%', gridTemplateColumns: '10% 80% 10%', backgroundColor: '#0c0c0c'}}>
      <Dialog style={{gridRow: '2 / span 1', gridColumn: '2 / span 1', width: '100%', minWidth: '100%'}} open={true}>
        <DialogTitle style={{backgroundColor: '#191919'}}>
          <p style={{textAlign: 'center', fontFamily: 'Montserrat', fontSize: '2vw', color: '#C1CDC1'}}>
            Your playlist is almost ready, {props.userName}!
          </p>
        </DialogTitle>
        <DialogContent style={{textAlign: 'center', backgroundColor:'#b6b6b6', paddingTop: '10%', paddingBottom: '10%'}}>
          <FormControl style={{width: '100%', minWidth: '50%', backgroundColor: '#b6b6b6', borderRadius: '5px', alignItems: 'center'}}>
            <TextField value={props.playlistName} label="Playlist Name:" fullWidth
              onChange={(event) => {props.handleNameChange(event.target.value)}}
              style={{margin: 15, width: '80%'}} InputLabelProps={{shrink: true}}/>
            <TextField value={props.playlistDescription} label="Playlist Description:" fullWidth multiline rows="3" rowsMax="3"
              onChange={(event) => {props.handleDescriptionChange(event.target.value)}}
              style={{margin: 15, width: '80%'}} InputLabelProps={{shrink: true}}/>
            <FormControlLabel style={{marginBottom: '5%'}} label="Private Playlist?"
              control={<Checkbox color="default" checked={props.checkBoxState} onChange={() => {props.handleClickBox()}} value="checkedG"/>} />
            <button style={{backgroundColor: '#3F6826', height: '35%', width: '40%', border: 'none', borderRadius: '5px',}} onClick={() => {props.handleDetailsSubmit()}} >
              <p style={{color: '#C1CDC1', fontFamily: 'Roboto', fontWeight: '800', fontSize: '1.3vmax',}}>CREATE!</p>
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

export default PlaylistDetailsBox;
