import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SelectionStepper from '../components/stepper.js';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PlaylistLoad from '../components/load';
import Playlist from '../../playlist/containers/playlist';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getUserData,
         onDialogOpen,
         onDialogClose,
         handleGenreSelection,
         handleDanceabilitySelection,
         handleEnergySelection,
         handleKeySelection,
         handleLoudnessSelection,
         handleModeSelection,
         handleTempoSelection,
         handlePositivenessSelection,
         handleSelectionSubmit
       } from '../../actions/selection_actions/actions';

const styles = theme => ({
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '10% 3% 8% 4% 3% 8% 10% 54%',
    gridTemplateColumns: '5% 10% 10% 50% 10% 10% 5%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridColumn: '2 / span 2',
    gridRow: '1 / span 1',
    placeSelf: 'center',
  },
  firstButtonItem: {
    gridColumn: '5 / span 1',
    gridRow: '1 / span 1',
    placeSelf: 'center'
  },
  secondButtonItem: {
    gridColumn: '6 / span 1',
    gridRow: '1 / span 1',
    placeSelf: 'center'
  },
  firsttitleItem: {
    gridColumn: '3 / span 3',
    gridRow: '3 / span 1',
    placeSelf: 'center'
  },
  hr: {
    gridColumn: '4 / span 1',
    gridRow: '5 / span 1',
    placeSelf: 'center'
  },
  secondtitleItem: {
    gridColumn: '3 / span 3',
    gridRow: '6 / span 1',
    placeSelf: 'center'
  },
  arrowItem: {
    gridColumn: '4 / span 1',
    gridRow: '7 / span 1',
    placeSelf: 'center'
  },
  stepperItem: {
    gridColumn: '1 / span 7',
    gridRow: '8 / span 1',
  },
  logo: {
    fontFamily: 'Roboto',
    fontSize: '3vw',
    fontWeight: '800',
    color: '#4A7023',
  },
  firstText: {
    fontFamily: 'Montserrat',
    fontSize: '2.5vw',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  secondText: {
    fontFamily: 'Montserrat',
    fontSize: '2.5vw',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  arrow: {
    width: '40px',
    height: '30px'
  },
  button: {
    height: '2.5em',
    width: '5.5em',
    borderRadius: '8px',
  },
  links: {
    fontFamily: 'Roboto',
    fontSize: '1.2vw',
    fontWeight: '400',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#C1CDC1',
    '&:hover': {
      color: "#00611C",
    },
  }
});

class Select extends React.Component {
  componentDidMount() {
    const parsed = queryString.parse(window.location.hash);
    const accessToken = parsed.access_token;
    this.props.dispatch(getUserData(accessToken))
  };

  render() {
    const { classes } = this.props;
    const userName = this.props.user_name;

    let body;
    if (!this.props.loading) {
      body = <SelectionStepper
                handleDialogOpen={() => {this.props.dispatch(onDialogOpen())}}
                handleDialogClose={() => {this.props.dispatch(onDialogClose())}}
                handleGenreSelection={(value) => {this.props.dispatch(handleGenreSelection(value))}}
                handleDanceabilitySelection={(value) => {this.props.dispatch(handleDanceabilitySelection(value))}}
                handleEnergySelection={(value) => {this.props.dispatch(handleEnergySelection(value))}}
                handleKeySelection={(value) => {this.props.dispatch(handleKeySelection(value))}}
                handleLoudnessSelection={(value) => {this.props.dispatch(handleLoudnessSelection(value))}}
                handleModeSelection={(value) => {this.props.dispatch(handleModeSelection(value))}}
                handleTempoSelection={(value) => {this.props.dispatch(handleTempoSelection(value))}}
                handlePositivenessSelection={(value) => {this.props.dispatch(handlePositivenessSelection(value))}}
                handleSelectionSubmit={(token) => {this.props.dispatch(handleSelectionSubmit(token))}}
                userToken={this.props.user_token}
                activeStep={this.props.activeStep}
                dialogOpen={this.props.dialogOpen}
                genreTitle={this.props.genreTitle}
                genre={this.props.genre}
                danceability={this.props.danceability}
                danceabilityTitle={this.props.danceabilityTitle}
                energy={this.props.energy}
                energyTitle={this.props.energyTitle}
                key={this.props.key}
                keyTitle={this.props.keyTitle}
                loudness={this.props.loudness}
                loudnessTitle={this.props.loudnessTitle}
                mode={this.props.mode}
                modeTitle={this.props.modeTitle}
                tempo={this.props.tempo}
                tempoTitle={this.props.tempoTitle}
                positiveness={this.props.valence}
                positivenessTitle={this.props.valenceTitle} />
  };

  if (this.props.loading) {
    body = <PlaylistLoad title={this.props.loading_title} content={this.props.loading_content} />
  };

  if (this.props.playlist_failure) {
    body = <PlaylistLoad title={this.props.failure_title} content={this.props.failure_content} />
  };

  if (this.props.success) {
    body = <Playlist tracks={this.props.tracks} userToken={this.props.user_token} />
  };

    return (
      <div className={classes.container}>
        <div className={classes.logoItem}>
          <text className={classes.logo}>Electronify</text>
        </div>
        <div className={classes.firstButtonItem}>
          <Button position="center" size="medium" className={classes.button}>
            <Link className={classes.links} to="/about">ABOUT</Link>
          </Button>
        </div>
        <div className={classes.secondButtonItem}>
          <Button position="center" size="medium" className={classes.button}>
            <Link className={classes.links} to="/contact">CONTACT</Link>
          </Button>
        </div>
        <div className={classes.firsttitleItem}>
          <text className={classes.firstText}>Good, {userName}! Now, let's get you what you want</text>
        </div>
        <div className={classes.hr}>
          <hr style={{width: '8.5em'}} />
        </div>
        <div className={classes.arrowItem}>
          <img className={classes.arrow} src="./arrow.png" alt="arrow" />
        </div>
        <div className={classes.secondtitleItem}>
          <text className={classes.secondText}>Follow the guide below to define your tune</text>
        </div>
        <div className={classes.stepperItem}>
          {body}
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  state = state.SelectionReducer;
  return {
    user_token: state.spotify_data.user_token,
    user_name: state.spotify_data.user_name,
    tracks: state.spotify_data.tracks,
    activeStep: state.select.activeStep,
    dialogOpen: state.select.dialogOpen,
    genre: state.user_selection.genre,
    genreTitle: state.titles.genre,
    danceability: state.user_selection.danceability,
    danceabilityTitle: state.titles.danceability,
    energy: state.user_selection.energy,
    energyTitle: state.titles.energy,
    key: state.user_selection.key,
    keyTitle: state.titles.key,
    loudness: state.user_selection.loudness,
    loudnessTitle: state.titles.loudness,
    mode: state.user_selection.mode,
    modeTitle: state.titles.mode,
    tempo: state.user_selection.tempo,
    tempoTitle: state.titles.tempo,
    positiveness: state.user_selection.valence,
    positivenessTitle: state.titles.valence,
    submitted: state.submitted,
    loading: state.loading_playlist,
    loading_title: state.loading_playlist_content.title,
    loading_content: state.loading_playlist_content.content,
    failure: state.playlist_failure,
    failure_title: state.playlist_failure_content.title,
    failure_content: state.playlist_failure_content.content,
    success: state.playlist_success,
  };
};

Select.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(styles)(Select);
const selectConnected = connect(mapStateToProps)(withstyles);
export default selectConnected;
