import {
  RENDER_PLAYLIST,
  PLAYLIST_SUCCESS,
  PLAYLIST_FAILURE,
  SPOTIFY_UPLOAD,
  APPLE_UPLOAD,
  DEEZER_UPLOAD
} from './action_types';

export function sendFetch() {
  return function (dispatch) {
    dispatch(fetch_starting());
    fetch('http://localhost:3000/getTenSongs')
    .then(function(response) {
      return response.json();
    })
    .then(function(artist_info) {
      dispatch(playlist_success(artist_info));
    })
    .catch(error => {
      dispatch(playlist_failure());
      console.error('Error:', error)
    });
  };
};

export function fetch_starting() {
  return function (dispatch) {
    dispatch({
        type: RENDER_PLAYLIST,
        payload: true,
    })
  }
};

export function playlist_success(artist_info) {
  return function (dispatch) {
    dispatch({
        type: PLAYLIST_SUCCESS,
        payload: true,
        artist_info: artist_info
    })
  }
};

export function playlist_failure() {
  return function (dispatch) {
    dispatch({
        type: PLAYLIST_FAILURE,
        payload: true,
    })
  }
};

export function uploadToSpotify() {
  return function (dispatch, getState) {
    const playlistData = {
      artist: getState().PlaylistReducer.song_data.artist,
      album: getState().PlaylistReducer.song_data.album,
      song: getState().PlaylistReducer.song_data.song,
      year: getState().PlaylistReducer.song_data.year,
      image: getState().PlaylistReducer.song_data.image
    };
    console.log(playlistData);
    dispatch({
        type: SPOTIFY_UPLOAD,
        payload: true
    })
  }
};

export function uploadToApplemusic() {
  return function (dispatch, getState) {
    const playlistData = {
      artist: getState().PlaylistReducer.song_data.artist,
      album: getState().PlaylistReducer.song_data.album,
      song: getState().PlaylistReducer.song_data.song,
      year: getState().PlaylistReducer.song_data.year,
      image: getState().PlaylistReducer.song_data.image
    };
    console.log(playlistData);
    dispatch({
        type: APPLE_UPLOAD,
        payload: true
    })
  }
};

export function uploadToDeezer() {
  return function (dispatch, getState) {
    const playlistData = {
      artist: getState().PlaylistReducer.song_data.artist,
      album: getState().PlaylistReducer.song_data.album,
      song: getState().PlaylistReducer.song_data.song,
      year: getState().PlaylistReducer.song_data.year,
      image: getState().PlaylistReducer.song_data.image
    };
    console.log(playlistData);
    dispatch({
        type: DEEZER_UPLOAD,
        payload: true
    })
  }
};
