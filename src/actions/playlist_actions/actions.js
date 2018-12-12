import {
  RENDER_PLAYLIST,
  PLAYLIST_SUCCESS,
  PLAYLIST_FAILURE,
  SPOTIFY_UPLOAD,
  APPLE_UPLOAD,
  DEEZER_UPLOAD
} from './action_types';

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
