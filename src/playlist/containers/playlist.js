import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PlaylistCard from '../components/playlist_card';
import PlaylistDetailsBox from '../components/playlist_details_box';
import PlaylistLoad from '../components/load';
import PlaylistSuccess from '../components/playlist_success';
import IconButton from '@material-ui/core/IconButton';
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
    height: '100vh',
    gridTemplateRows: '6% 8% 8% 5% 5% 10% 7% 5% 57% 5%',
    gridTemplateColumns: '5% 8% 8% 8% 42% 8% 8% 8% 5%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 2',
    placeSelf: 'center',
    paddingTop: '20%'
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
    paddingTop: '40%'
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '8 / span 1',
    placeSelf: 'center',
    paddingTop: '40%'
  },
  firsttitleItem: {
    gridRow: '3 / span 1',
    gridColumn: '3 / span 5',
    placeSelf: 'center'
  },
  hr: {
    gridRow: '5 / span 1',
    gridColumn: '4 / span 3',
    placeSelf: 'center'
  },
  secondtitleItem: {
    gridRow: '6 / span 1',
    gridColumn: '3 / span 5',
    placeSelf: 'center'
  },
  arrowItem: {
    gridRow: '7 / span 1',
    gridColumn: '5 / span 1',
    placeSelf: 'center'
  },
  stepperItem: {
    gridRow: '9 / span 1',
    gridColumn: '1 / span 9',
  },
  /////////////////////////////////////////
  logo: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '3vmax',
    fontWeight: '800',
    color: '#4A7023',
  },
  firstText: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '2.5vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  secondText: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '2.5vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  },
  arrow: {
    width: '2.8vmax',
    height: '2.3vmax'
  },
});

class Playlist extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleSelectionSubmit())
  };

  render() {
    const { classes } = this.props;
    const tracks = this.props.tracks;

    let pageContent;

    if (this.props.playlist_charging) {
      pageContent =
        <PlaylistLoad
          title={this.props.playlist_charging_content_title}
          content={this.props.playlist_charging_content_content} />
      };

    if (this.props.playlist_failure) {
      pageContent =
        <PlaylistLoad
          title={this.props.playlist_failure_content_title}
          content={this.props.playlist_failure_content_content} />
      };

    if (this.props.playlist_success) {
      pageContent =
      <div>
        <PlaylistCard
          number="1"
          song={tracks[0].name}
          artist={tracks[0].album.artists[0].name}
          album={tracks[0].album.name}
          image={tracks[0].album.images[1].url} />
        <PlaylistCard
          number="2"
          song={tracks[1].name}
          artist={tracks[1].album.artists[0].name}
          album={tracks[1].album.name}
          image={tracks[1].album.images[1].url} />
        <PlaylistCard
          number="3"
          song={tracks[2].name}
          artist={tracks[2].album.artists[0].name}
          album={tracks[2].album.name}
          image={tracks[2].album.images[1].url} />
        <PlaylistCard
          number="4"
          song={tracks[3].name}
          artist={tracks[3].album.artists[0].name}
          album={tracks[3].album.name}
          image={tracks[3].album.images[1].url} />
        <PlaylistCard
          number="5"
          song={tracks[4].name}
          artist={tracks[4].album.artists[0].name}
          album={tracks[4].album.name}
          image={tracks[4].album.images[1].url} />
        <PlaylistCard
          number="6"
          song={tracks[5].name}
          artist={tracks[5].album.artists[0].name}
          album={tracks[5].album.name}
          image={tracks[5].album.images[1].url} />
        <PlaylistCard
          number="7"
          song={tracks[6].name}
          artist={tracks[6].album.artists[0].name}
          album={tracks[6].album.name}
          image={tracks[6].album.images[1].url} />
        <PlaylistCard
          number="8"
          song={tracks[7].name}
          artist={tracks[7].album.artists[0].name}
          album={tracks[7].album.name}
          image={tracks[7].album.images[1].url} />
        <PlaylistCard
          number="9"
          song={tracks[8].name}
          artist={tracks[8].album.artists[0].name}
          album={tracks[8].album.name}
          image={tracks[8].album.images[1].url} />
        <PlaylistCard
          number="10"
          song={tracks[9].name}
          artist={tracks[9].album.artists[0].name}
          album={tracks[9].album.name}
          image={tracks[9].album.images[1].url} />
        <PlaylistCard
          number="11"
          song={tracks[10].name}
          artist={tracks[10].album.artists[0].name}
          album={tracks[10].album.name}
          image={tracks[10].album.images[1].url} />
        <PlaylistCard
          number="12"
          song={tracks[11].name}
          artist={tracks[11].album.artists[0].name}
          album={tracks[11].album.name}
          image={tracks[11].album.images[1].url} />
        <PlaylistCard
          number="13"
          song={tracks[12].name}
          artist={tracks[12].album.artists[0].name}
          album={tracks[12].album.name}
          image={tracks[12].album.images[1].url} />
        <PlaylistCard
          number="14"
          song={tracks[13].name}
          artist={tracks[13].album.artists[0].name}
          album={tracks[13].album.name}
          image={tracks[13].album.images[1].url} />
        <PlaylistCard
          number="15"
          song={tracks[14].name}
          artist={tracks[14].album.artists[0].name}
          album={tracks[14].album.name}
          image={tracks[14].album.images[1].url} />
        <PlaylistCard
          number="16"
          song={tracks[15].name}
          artist={tracks[15].album.artists[0].name}
          album={tracks[15].album.name}
          image={tracks[15].album.images[1].url} />
        <PlaylistCard
          number="17"
          song={tracks[16].name}
          artist={tracks[16].album.artists[0].name}
          album={tracks[16].album.name}
          image={tracks[16].album.images[1].url} />
        <PlaylistCard
          number="18"
          song={tracks[17].name}
          artist={tracks[17].album.artists[0].name}
          album={tracks[17].album.name}
          image={tracks[17].album.images[1].url} />
        <PlaylistCard
          number="19"
          song={tracks[18].name}
          artist={tracks[18].album.artists[0].name}
          album={tracks[18].album.name}
          image={tracks[18].album.images[1].url} />
        <PlaylistCard
          number="20"
          song={tracks[19].name}
          artist={tracks[19].album.artists[0].name}
          album={tracks[19].album.name}
          image={tracks[19].album.images[1].url} />
        <PlaylistCard
          number="21"
          song={tracks[20].name}
          artist={tracks[20].album.artists[0].name}
          album={tracks[20].album.name}
          image={tracks[20].album.images[1].url} />

          <div className={classes.saveLogoItem}>
            <IconButton onClick={() => this.props.dispatch(details_box_open())} className={classes.iconButton}>
              <img className={classes.logos} src="./spotify.jpg" alt="Spotify Logo" />
            </IconButton>
          </div>
      </div>

      };

      if (this.props.details_box) {
        pageContent =
            <PlaylistDetailsBox
              playlistName={this.props.playlist_name}
              playlistDescription={this.props.playlist_description}
              checkBoxState={this.props.check_box_state}
              handleNameChange={(value) => {this.props.dispatch(handleNameChange(value))}}
              handleDescriptionChange={(value) => {this.props.dispatch(handleDescriptionChange(value))}}
              handleClickBox={() => {this.props.dispatch(handleClickBox())}}
              handleDetailsSubmit={() => {this.props.dispatch(handleDetailsSubmit())}}
            />
        };


      if (this.props.playlist_created) {
        pageContent =
            <PlaylistSuccess />
      };

    return (
      <div className={classes.container}>
        <div className={classes.logoItem}>
          <p className={classes.logo}>Electronify</p>
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

        <div className={classes.firsttitleItem}>
          <p className={classes.firstText}>Good! Now, let's get you what you want</p>
        </div>
        <div className={classes.hr}>
          <hr style={{width: '8.5em'}} />
        </div>
        <div className={classes.arrowItem}>
          <img className={classes.arrow} src="./arrow.png" alt="arrow" />
        </div>
        <div className={classes.secondtitleItem}>
          <p className={classes.secondText}>Follow the guide below to define your tune</p>
        </div>
        <div className={classes.stepperItem}>
          {pageContent}
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  state = state.PlaylistReducer;
  return {
    playlist_charging: state.playlist_charging,
    playlist_charging_content_title: state.playlist_charging_content.title,
    playlist_charging_content_content: state.playlist_charging_content.content,
    playlist_failure: state.playlist_failure,
    playlist_failure_content_title: state.playlist_failure_content.title,
    playlist_failure_content_content: state.playlist_failure_content.content,
    playlist_success: state.playlist_success,
    tracks: state.tracks,
    details_box: state.details_box,
    playlist_name: state.playlist_name,
    playlist_description: state.playlist_description,
    check_box_state: state.check_box_state,
    playlist_created: state.playlist_created
  };
};

Playlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(playlistStyle)(Playlist);
const playlistConnected = connect(mapStateToProps)(withstyles);
export default playlistConnected;
