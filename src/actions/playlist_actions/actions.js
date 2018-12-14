import {
      STORE_PLAYLIST,
      LOADING,
      USER_INFO,
      PLAYLIST_ID
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
      name: "Alican's 9 Amazing Songs",
      description: "9 songs that electrifies your vibe. @Created by Soundiversify."
    };

    fetch(final_endpoint, {
      method: 'POST',
      body: JSON.stringify(body_data),
      headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(function(data) {
      const playlist_id = data.id;
      dispatch({
          type: PLAYLIST_ID,
          payload: playlist_id,
      });
      dispatch(pushTracks());
    })
    .catch(error => {
      console.error('Error:', error)
    });
  };
};

export function pushTracks() {
  return function (dispatch, getState) {
    const state = getState().PlaylistReducer;
    const one = state.playlistData[0].uri;
    const two = state.playlistData[1].uri;
    const three = state.playlistData[2].uri;
    const four = state.playlistData[3].uri;
    const five = state.playlistData[4].uri;
    const six = state.playlistData[5].uri;
    const seven = state.playlistData[6].uri;
    const eight = state.playlistData[7].uri;
    const nine = state.playlistData[8].uri;
    const ten = state.playlistData[9].uri;

    const token = state.token;

    const root_endpoint = "https://api.spotify.com/v1/playlists/";
    const playlist_id = state.playlist_id;
    const tracks = `/tracks?uris=${one},${two},${three},${four},${five},${six},${seven},${eight},${nine},${ten}`
    const final_endpoint = `${root_endpoint}${playlist_id}${tracks}`

    fetch(final_endpoint, {
      method: 'POST',
      headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        console.log("success");
      }
    })
    .catch(error => {
      console.error('Error:', error)
    });


  };
};
