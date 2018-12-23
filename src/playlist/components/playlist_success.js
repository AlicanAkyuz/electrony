import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = successTheme => ({
  container: {
    display: 'grid',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: "8% 5% 39% 5% 27% 4% 9% 3%",
    gridTemplateColumns: '6% 8% 6% 2% 3% 1% 8% 32% 8% 3% 8% 3% 8% 4%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 2',
    placeSelf: 'center',
    paddingTop: '7%',
    marginLeft: '15%'
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '9 / span 1',
    placeSelf: 'center',
    paddingTop: '15%'
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '11 / span 1',
    placeSelf: 'center',
    paddingTop: '15%'
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '13 / span 1',
    placeSelf: 'center',
    paddingTop: '15%'
  },
  playlistItem: {
    gridRow: '3 / span 1',
    gridColumn: '7 / span 3',
    placeSelf: 'center'
  },
  paperItem: {
    gridRow: '5 / span 1',
    gridColumn: '1 / span 14',
    placeSelf: 'center'
  },
  buttonItem: {
    gridRow: '7 / span 1',
    gridColumn: '7 / span 3',
    placeSelf: 'center'
  },
//////////////////////////////////////////
  logo: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '3vmax',
    fontWeight: '800',
    color: '#4A7023',
  },
  links: {
    fontFamily: 'Montserrat',
    fontSize: '1.3vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
  },
  paper: {
    backgroundColor: '#191919',
    borderRadius: '5px',
    ...successTheme.mixins.gutters(),
    paddingTop: successTheme.spacing.unit * 2,
    paddingBottom: successTheme.spacing.unit * 2,
  },
  playlistPaper: {
    backgroundColor: '#191919',
    borderRadius: '5px',
    ...successTheme.mixins.gutters(),
    paddingTop: successTheme.spacing.unit * 2,
    paddingBottom: successTheme.spacing.unit * 1,
  },
  buttonPaper: {
    backgroundColor: '#00611C',
    ...successTheme.mixins.gutters(),
    paddingTop: successTheme.spacing.unit * 1,
    paddingBottom: successTheme.spacing.unit * 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '1.6vmax',
    fontWeight: '400',
    color: '#c5c5c5',
  },
  texts: {
    fontFamily: 'Montserrat',
    fontSize: '1.2vmax',
    fontWeight: '400',
    color: '#CFDBC5',
  },
  playlistTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '1.6vmax',
    fontWeight: '400',
    color: '#c5c5c5',
  },
  button: {
    backgroundColor: '#00611C',
    height: '100%',
    width: '100%',
    borderRadius: '5px',
    border: 'none'
  },
  link: {
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#c5c5c5",
    },
  },
});

export function PlaylistSuccess(props) {
  const { classes } = props;
  const uriParts = props.playlistUri.split(':');
  const embedLink = `https://open.spotify.com/embed/${uriParts[1]}/${uriParts[2]}/${uriParts[3]}/${uriParts[4]}`;

  return (
    <div className={classes.container}>
      <div className={classes.logoItem}>
        <p className={classes.logo}>Electronify</p>
      </div>
      <div className={classes.firstButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/">HOME</Link></Button>
      </div>
      <div className={classes.secondButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/ourteam">TEAM</Link></Button>
      </div>
      <div className={classes.thirdButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/contact">CONTACT</Link></Button>
      </div>

      <div className={classes.playlistItem}>
        <Paper className={classes.playlistPaper} elevation={1}>
          <Typography variant="h5" component="h3" className={classes.playlistTitle}>
            Here is your playlist, {props.userName}:
          </Typography>
          <br />
          <div class="animated zoomIn delay-1s">
            <iframe src={embedLink}
              width="300"
              height="230"
              frameBorder="0"
              title="Spotify Playlist"
              allowtransparency="true"
              allow="encrypted-media">
            </iframe>
          </div>
        </Paper>
      </div>

      <div className={classes.paperItem}>
        <Paper className={classes.paper} elevation={5}>
          <Typography variant="h5" component="h3" className={classes.title}>
             Your playlist's details:
          </Typography>
          <br />
          <Typography component="p" className={classes.texts}>
            Name:&nbsp; {props.playlistName}
          </Typography>
          <Typography component="p" className={classes.texts}>
            Description:&nbsp; {props.playlistDescription}
          </Typography>
          <Typography component="p" className={classes.texts}>
            Private:&nbsp; {props.private}
          </Typography>
          <Typography component="p" className={classes.texts}>
            Notable Artists:&nbsp; {props.artists}
          </Typography>
          <Typography component="p" className={classes.texts}>
            Dominant Genre:&nbsp; {props.genre}
          </Typography>
          <Typography component="p" className={classes.texts}>
            Spotify Link:&nbsp; <a style={{textDecoration: 'none', color: '#308014'}} target="_blank" href={props.playlistUrl}>Click Here.</a>
          </Typography>
        </Paper>
      </div>



      <div className={classes.buttonItem}>
        <Paper className={classes.buttonPaper} elevation={1}>
          <div class="animated flip">
            <button className={classes.button}>
              <Link to="/" className={classes.link}>CREATE ANOTHER ONE!</Link>
            </button>
          </div>
        </Paper>
      </div>
    </div>
  )
};

PlaylistSuccess.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaylistSuccess);
