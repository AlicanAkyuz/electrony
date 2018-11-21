

<Button disabled={false} variant="contained" onClick={this.handleNext} className={classes.button}>
  {this.props.activeStep === getSteps().length - 1 ? 'Create Playlist' : 'Next'}
</Button>

<Button disabled={this.props.activeStep === 0} onClick={this.handleBack} className={classes.button}>
  Back
</Button>

{this.props.activeStep === getSteps().length && (
  <Grid className={classes.buttonHolder} item xs={12}>
    <MyButton page="/playlist" text="create playlist" position="center" />
  </Grid>
)}

//// fetch body to send:
const user_selections = {
  danceability: getState().user_selection.danceability,
  acousticness: getState().user_selection.acousticness,
  energy: getState().user_selection.energy,
  instrumentalness: getState().user_selection.instrumentalness,
  key: getState().user_selection.key,
  loudness: getState().user_selection.loudness,
  mode: getState().user_selection.mode,
  popularity: getState().user_selection.popularity,
  tempo: getState().user_selection.tempo,
  valence: getState().user_selection.valence
};

// server-side body ro receive:
const receivedInfo = {
  danceability: req.body.danceability,
  acousticness: req.body.acousticness,
  energy: req.body.energy,
  instrumentalness: req.body.instrumentalness,
  key: req.body.key,
  loudness: req.body.loudness,
  mode: req.body.mode,
  popularity: req.body.popularity,
  tempo: req.body.tempo,
  valence: req.body.valence
};
