import {
      STORE_PLAYLIST,
      LOADING,
      USER_INFO
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


    fetch(`https://api.spotify.com/v1/users/${params}`, {
      method: 'POST',
      body: JSON.stringify(body_data),
      headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        console.log('Success:', JSON.stringify(res.json()));
        console.log(res);
      }
    })
    .catch(error => {
      console.error('Error:', error)
    });



  };
};
