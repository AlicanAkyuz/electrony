import {
      STORE_PLAYLIST,
      LOADING,
      USER_INFO,
      PLAYLIST_ENDPOINT
} from './action_types';

export function playlistStore(spotifyData, token) {
  return function (dispatch, getState) {
    dispatch({
        type: STORE_PLAYLIST,
        payload: spotifyData,
        token: token
    });
    dispatch(fetch_beginnig());
  }
};

export function fetch_beginnig() {
  return function (dispatch) {
    dispatch({
        type: LOADING,
        payload: true,
    })
    dispatch(getUserID());
  }
};

export function getUserID() {
  return function (dispatch, getState) {
    const token = getState().PlaylistReducer.token;
    fetch("https://api.spotify.com/v1/me", {
      headers: {'Authorization': "Bearer " + token}
    })
    .then(response => response.json())
    .then(function(user_info) {
      dispatch({
          type: USER_INFO,
          payload: user_info,
      })
      dispatch(playlistCreate());
    })
    .catch(error => console.error('Error:', error));
  };
};

export function playlistCreate() {
  return function (dispatch, getState) {
    const token = getState().PlaylistReducer.token;
    const user_id = getState().PlaylistReducer.user_info.id;
    const root_endpoint = "https://api.spotify.com/v1/users/";
    const params = `${user_id}/playlists`;
    const final_endpoint = `${root_endpoint}${params}`;
    const body_data = {
      name: "Alican Diversified",
      description: "Your 10 songs that electrfies your vibe"
    };

    fetch(final_endpoint, {
      method: 'POST',
      body: JSON.stringify(body_data),
      headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        const playlist_endpoint = res.url;
        dispatch({
            type: PLAYLIST_ENDPOINT,
            payload: playlist_endpoint,
        });
        dispatch(pushTracks());
      }
    })
    .catch(error => {
      console.error('Error:', error)
    });
  };
};

export function pushTracks() {
  return function (dispatch, getState) {
    const state = getState().PlaylistReducer;

    const track_id_one = state.playlistData[0].uri;
    const track_id_two = state.playlistData[1].uri;
    const track_id_three = state.playlistData[2].uri;
    const track_id_four = state.playlistData[3].uri;
    const track_id_five = state.playlistData[4].uri;
    const track_id_six = state.playlistData[5].uri;
    const track_id_seven = state.playlistData[6].uri;
    const track_id_eight = state.playlistData[7].uri;
    const track_id_nine = state.playlistData[8].uri;
    const track_id_ten = state.playlistData[9].uri;

    const token = state.token;
    const user_id = state.user_info.id;


    const playlist_endpoint = state.playlist_endpoint;
    const params = `${user_id}/playlists`;
    const final_endpoint = `${playlist_endpoint}`

    const coreboyle_olacak = "https://api.spotify.com/v1/playlists/";
    const sonra_playlistid_lazım = "7oi0w0SLbJ4YyjrOxhZbUv/";
    const sonra_tracks_plus_track_URIs = "tracks?uris=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh,spotify%3Atrack%3A1301WleyT98MSxVHPZCA6M";
  };
};
