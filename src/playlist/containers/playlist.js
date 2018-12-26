import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import PlaylistDetailsBox from '../components/playlist_details_box';
import Load from '../components/load';
import PlaylistSuccess from '../components/playlist_success';
import { connect } from 'react-redux';
import { handleSelectionSubmit,
         details_box_open,
         handleNameChange,
         handleDescriptionChange,
         handleClickBox,
         handleDetailsSubmit
} from '../../actions/playlist_actions/actions';

const playlistStyle = playlistStyle => ({
  container: {
    display: 'grid',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: '1% 1% 95% 3%',
    gridRowGap: '10px',
    gridTemplateColumns: '5% 10% 10% 10% 30% 10% 10% 10% 5%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 2',
    placeSelf: 'center',
    paddingTop: '20%',
    marginLeft: '5%'
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '6 / span 1',
    placeSelf: 'center',
    paddingTop: '40%'
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '7 / span 1',
    placeSelf: 'center',
    paddingTop: '40%',
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '8 / span 1',
    placeSelf: 'center',
    paddingTop: '40%',
  },
  contentItem: {
    gridRow: '3 / span 1',
    gridColumn: '2 / span 7',
  },
  hr: {
  width: '8.5em',
  },
  /////////////////////////////////////////
  cardHolder: {
    display: 'grid',
    gridTemplateRows: '100%',
    gridTemplateColumns: '5% 15% 60% 15% 5%',
    marginTop: '2%'
  },
  numberCard: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 1',
    backgroundColor: '#353F3E',
    width: '100%'
  },
  cardNumber: {
    fontFamily: 'Roboto',
    fontSize: '3.8vmax',
    fontWeight: '800',
    color: '#CFDBC5',
    textAlign: 'center'
  },
  contentCard: {
    gridRow: '1 / span 1',
    gridColumn: '3 / span 1',
    backgroundColor: '#191919',
    width: '100%'
  },
  trackName: {
    fontFamily: 'Roboto',
    fontSize: '2vmax',
    color: '#c5c5c5',
    marginLeft: '3%'
  },
  artistAndAlbumName: {
    fontFamily: 'Roboto',
    fontSize: '1.5vmax',
    color: '#c5c5c5',
    marginLeft: '3%'
  },
  imageCard: {
    gridRow: '1 / span 1',
    gridColumn: '4 / span 1',
    backgroundColor: '#0c0c0c',
    width: '100%'
  },
  cardMedia: {
    width: '13vmax',
    height: '13vmax',
    borderRadius: '5px'
  },
  logo: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '3.2vmax',
    fontWeight: '800',
    color: '#4A7023',
  },
  links: {
    fontFamily: 'Montserrat',
    fontSize: '1.2vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '2.2vmax',
    fontWeight: '400',
    color: '#C1CDC1',
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

class Playlist extends React.Component {
  componentWillMount() {
    this.props.dispatch(handleSelectionSubmit())
  };

  render() {
    const { classes } = this.props;
    const tracks = this.props.tracks;
    let pageContent;

    if (this.props.playlist_charging) {
      pageContent = <Load title={this.props.playlist_charging_content_title}
                          content={this.props.playlist_charging_content_content} />
      };

    if (this.props.no_return) {
      pageContent = <Load failure="failure"
                          title={this.props.no_return_content_title}
                          content={this.props.no_return_content_content} />
      };

    if (this.props.playlist_failure) {
      pageContent = <Load token={this.props.token}
                          failure="failure"
                          title={this.props.playlist_failure_content_title}
                          content={this.props.playlist_failure_content_content} />
    };

    if (this.props.playlist_success) {
      pageContent =
      <div className={classes.container}>
        <div className={classes.logoItem}>
          <p className={classes.logo}>Electrony</p>
        </div>
        <div className={classes.firstButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/about">ABOUT</Link></Button>
        </div>
        <div className={classes.secondButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/ourteam">TEAM</Link></Button>
        </div>
        <div className={classes.thirdButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/contact">CONTACT</Link></Button>
        </div>
        <div className={classes.contentItem}>
          <p className={classes.title}>Here are the tracks specially crafted for your choices</p>
          <div>
            <hr className={classes.hr}/>
          </div>
          <div class="animated flip" style={{textAlign: 'center', marginTop: '2%'}}>
            <Button size="large" variant="contained" className={classes.button}
                    onClick={() => this.props.dispatch(details_box_open())}>
              UPLOAD TO SPOTIFY!
            </Button>
          </div>
          {tracks.map((track, index) =>
          <div className={classes.cardHolder}>
            <Card className={classes.numberCard}>
              <p className={classes.cardNumber}>{index + 1}</p>
            </Card>
            <Card className={classes.contentCard}>
              <p className={classes.trackName}>{track.name}</p>
              <p className={classes.artistAndAlbumName}>Artist: {track.album.artists[0].name}</p>
              <p className={classes.artistAndAlbumName}>Album: {track.album.name}</p>
            </Card>
            <Card className={classes.imageCard}>
              <CardMedia className={classes.cardMedia} image={track.album.images[1].url} title="albumImage"/>
            </Card>
          </div>
          )};
          <div class="animated infinite jello" style={{textAlign: 'center', marginTop: '2%'}}>
            <Button size="large" variant="contained" className={classes.button}
                    onClick={() => this.props.dispatch(details_box_open())}>
              UPLOAD TO SPOTIFY!
            </Button>
          </div>
        </div>
      </div>
    };


    if (this.props.details_box) {
      pageContent =
      <PlaylistDetailsBox userName={this.props.user_name} playlistName={this.props.playlist_name}
                          handleNameChange={(value) => {this.props.dispatch(handleNameChange(value))}}
                          playlistDescription={this.props.playlist_description}
                          handleDescriptionChange={(value) => {this.props.dispatch(handleDescriptionChange(value))}}
                          checkBoxState={this.props.check_box_state}
                          handleClickBox={() => {this.props.dispatch(handleClickBox())}}
                          handleDetailsSubmit={() => {this.props.dispatch(handleDetailsSubmit())}} />
    };


    if (this.props.uploading) {
      pageContent = <Load title={this.props.uploading_content_title}
                          content={this.props.uploading_content_content} />
    };

    if (this.props.uploading_failure) {
      pageContent = <Load failure="failure"
                          token={this.props.token}
                          title={this.props.uploading_failure_content_title}
                          content={this.props.uploading_failure_content_content} />
    };

    if (this.props.playlist_created) {
      let stateOfPrivate;
      this.props.check_box_state === true ? stateOfPrivate = "Yes" : stateOfPrivate = "No";
      const artists = `${this.props.first_artist} and ${this.props.second_artist}`;
      pageContent = <PlaylistSuccess token={this.props.token}
                                     userName={this.props.user_name}
                                     playlistName={this.props.playlist_name}
                                     playlistDescription={this.props.playlist_description}
                                     private={stateOfPrivate}
                                     artists={artists}
                                     genre={this.props.genre}
                                     playlistUri={this.props.playlist_uri}
                                     playlistUrl={this.props.playlist_url}
                                    />
    };

    return (<div>{pageContent}</div>)
  }
};



const mapStateToProps = state => {
  const info = state.PlaylistReducer;
  return {
    genre: state.SelectionReducer.user_selection.genre,
    token: state.SelectionReducer.user_data.user_token,
    playlist_charging: info.playlist_charging,
    playlist_charging_content_title: info.playlist_charging_content.title,
    playlist_charging_content_content: info.playlist_charging_content.content,
    no_return: info.no_return,
    no_return_content_title: info.no_return_content.title,
    no_return_content_content: info.no_return_content.content,
    playlist_failure: info.playlist_failure,
    playlist_failure_content_title: info.playlist_failure_content.title,
    playlist_failure_content_content: info.playlist_failure_content.content,
    playlist_success: info.playlist_success,
    tracks: info.tracks,
    first_artist: info.first_artist,
    second_artist: info.second_artist,
    details_box: info.details_box,
    user_name: info.user_name,
    playlist_name: info.playlist_name,
    playlist_description: info.playlist_description,
    check_box_state: info.check_box_state,
    playlist_uri: info.playlist_uri,
    playlist_url: info.playlist_url,
    uploading: info.uploading,
    uploading_content_title: info.uploading_content.title,
    uploading_content_content: info.uploading_content.content,
    uploading_failure: info.uploading_failure,
    uploading_failure_content_title: info.uploading_failure_content.title,
    uploading_failure_content_content: info.uploading_failure_content.content,
    playlist_created: info.playlist_created
  };
};

Playlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(playlistStyle)(Playlist);
const playlistConnected = connect(mapStateToProps)(withstyles);
export default playlistConnected;
