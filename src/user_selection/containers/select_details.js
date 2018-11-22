import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavBar from '../../components/navbar';
import SelectionStepper from '../components/stepper.js';
import { connect } from 'react-redux';
import { sendFetch } from '../../actions/playlist_actions/actions';
import { onDialogOpen,
         onDialogClose,
         handleDanceabilitySelection,
         handleAcousticnessSelection,
         handleEnergySelection,
         handleInstrumentalnessSelection,
         handleKeySelection,
         handleLoudnessSelection,
         handleModeSelection,
         handlePopularitySelection,
         handleTempoSelection,
         handleValenceSelection
         } from '../../actions/selection_actions/actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '720px',
    backgroundColor: 'black'
  },
  navBarHolder: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  containerGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  welcomeGrid: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    marginTop: '13%',
  },
  typographyOne: {
    fontFamily: 'Montserrat',
    fontSize: '70px',
    fontWeight: '800',
    color: '#c5c5c5'
  },
  typographyTwo: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    color: '#c5c5c5'
  },
  stepperGrid: {
    width: '30%',
    marginTop: '3%',
    marginBottom: '3%'
  }
});

class Select extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <Grid className={classes.containerGrid} container>
          <Grid className={classes.navBarHolder} item xs={12}>
            <NavBar pageOne="/about" textOne="About" pageTwo="/contact" textTwo="Contact" />
          </Grid>

          <Grid className={classes.welcomeGrid} item>
            <Typography className={classes.typographyOne}>
              Diversify Your Sound
            </Typography>
            <Typography className={classes.typographyTwo}>
              Make your choices in the following 10 steps to specify the tune you love.
            </Typography>
            <Typography className={classes.typographyTwo}>
              We will then curate a playlist that will surprise your ears.
            </Typography>
          </Grid>

          <Grid className={classes.stepperGrid} item>
            <SelectionStepper
              handleDialogOpen={() => {this.props.dispatch(onDialogOpen())}}
              handleDialogClose={() => {this.props.dispatch(onDialogClose())}}
              handleDanceabilitySelection={(value) => {this.props.dispatch(handleDanceabilitySelection(value))}}
              handleAcousticnessSelection={(value) => {this.props.dispatch(handleAcousticnessSelection(value))}}
              handleEnergySelection={(value) => {this.props.dispatch(handleEnergySelection(value))}}
              handleInstrumentalnessSelection={(value) => {this.props.dispatch(handleInstrumentalnessSelection(value))}}
              handleKeySelection={(value) => {this.props.dispatch(handleKeySelection(value))}}
              handleLoudnessSelection={(value) => {this.props.dispatch(handleLoudnessSelection(value))}}
              handleModeSelection={(value) => {this.props.dispatch(handleModeSelection(value))}}
              handlePopularitySelection={(value) => {this.props.dispatch(handlePopularitySelection(value))}}
              handleTempoSelection={(value) => {this.props.dispatch(handleTempoSelection(value))}}
              handleValenceSelection={(value) => {this.props.dispatch(handleValenceSelection(value))}}
              sendFetch={() => {this.props.dispatch(sendFetch())}}
              activeStep={this.props.activeStep}
              dialogOpen={this.props.dialogOpen}
              danceability={this.props.danceability}
              danceabilityTitle={this.props.danceabilityTitle}
              acousticness={this.props.acousticness}
              acousticnessTitle={this.props.acousticnessTitle}
              energy={this.props.energy}
              energyTitle={this.props.energyTitle}
              instrumentalness={this.props.instrumentalness}
              instrumentalnessTitle={this.props.instrumentalnessTitle}
              key={this.props.key}
              keyTitle={this.props.keyTitle}
              loudness={this.props.loudness}
              loudnessTitle={this.props.loudnessTitle}
              mode={this.props.mode}
              modeTitle={this.props.modeTitle}
              popularity={this.props.popularity}
              popularityTitle={this.props.popularityTitle}
              tempo={this.props.tempo}
              tempoTitle={this.props.tempoTitle}
              valence={this.props.valence}
              valenceTitle={this.props.valenceTitle}
            />
          </Grid>
        </Grid>
      </div>
    );
  };
};

const mapStateToProps = state => {
  state = state.SelectionReducer;
  return {
    activeStep: state.select.activeStep,
    dialogOpen: state.select.dialogOpen,
    danceability: state.user_selection.danceability,
    acousticness: state.user_selection.acousticness,
    energy: state.user_selection.energy,
    instrumentalness: state.user_selection.instrumentalness,
    key: state.user_selection.key,
    loudness: state.user_selection.loudness,
    mode: state.user_selection.mode,
    popularity: state.user_selection.popularity,
    tempo: state.user_selection.tempo,
    valence: state.user_selection.valence,
    danceabilityTitle: state.titles.danceability,
    acousticnessTitle: state.titles.acousticness,
    energyTitle: state.titles.energy,
    instrumentalnessTitle: state.titles.instrumentalness,
    keyTitle: state.titles.key,
    loudnessTitle: state.titles.loudness,
    modeTitle: state.titles.mode,
    popularityTitle: state.titles.popularity,
    tempoTitle: state.titles.tempo,
    valenceTitle: state.titles.valence,
  };
};

Select.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(styles)(Select);
const selectConnected = connect(mapStateToProps)(withstyles);
export default selectConnected;
