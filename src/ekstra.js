

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
