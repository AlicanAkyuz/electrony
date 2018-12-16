import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = playlistCardTheme => ({
  card: {
    display: 'flex',
    marginTop: '2%',
    width: '100%',
    maxHeight: '150px',
    minHeight: '150px',
    backgroundColor: '#2a2a2a',
  },
  gridsHolder: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000000',
  },
  numberGrid: {
    width: '10%',
    backgroundColor: '#5F755E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '50px',
    color: '#c5c5c5'
  },
  contentGrid: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#191919'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flex: '1 0 auto',
    padding: '1%'
  },
  songText: {
    fontSize: '30px',
    fontFamily: 'Roboto',
    fontWeight: '800',
    color: '#e5e5e5'
  },
  artistText: {
    marginTop: '1%',
    fontSize: '15px',
    fontFamily: 'Montserrat',
    color: '#C1CDC1'
  },
  albumText: {
    marginTop: '1%',
    fontSize: '15px',
    fontFamily: 'Montserrat',
    color: '#C1CDC1'
  },
  cover: {
    width: 150,
    height: 150
  }
});

function PlaylistCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <Grid className={classes.gridsHolder} container spacing={24}>

        <Grid className={classes.numberGrid} item xs={12}>
          <h1 className={classes.number}>
            {props.number}
          </h1>
        </Grid>

        <Grid className={classes.contentGrid} item xs={12}>
          <CardContent className={classes.content}>
            <text className={classes.songText}>
              {props.song}
            </text>
            <text className={classes.artistText}>
              Artist: {props.artist}
            </text>
            <text className={classes.albumText}>
              Album: {props.album}
            </text>
          </CardContent>
        </Grid>

        <Grid className={classes.cardGrid} item xs={12}>
          <CardMedia
            className={classes.cover}
            image={props.image}
            title={props.song}
          />
        </Grid>

      </Grid>
    </Card>
  );
};

PlaylistCard.propTypes = {
  classes: PropTypes.object.isRequired,
  playlistCardTheme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PlaylistCard);
