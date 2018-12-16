import {
      STORE_PLAYLIST,
      USER_INFO,
      PLAYLIST_ID,
      CHARGING,
      NAME_BOX,
      NAME_CHANGED,
      DESCRIPTION_CHANGED,
      CHECK_BOX,
      NAME_SUBMIT,
      SUCCESS
} from './action_types';

export function store_playlist_info(spotifyData, token) {
  return function (dispatch, getState) {
    dispatch({
        type: STORE_PLAYLIST,
        payload: spotifyData,
        token: token
    });
    dispatch(playlist_loading());
  }
};

export function playlist_loading() {
  return function (dispatch) {
    dispatch({
        type: CHARGING,
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
      const user_name = user_info.display_name;
      dispatch({
          type: USER_INFO,
          payload: user_info,
          payloadTwo: user_name
      })
      dispatch(playlist_name_box());
    })
    .catch(error => console.error('Error:', error));
  };
};

export function playlist_name_box() {
  return function (dispatch, getState) {
    dispatch({
        type: NAME_BOX,
        payload: true,
    })
  }
};

export function handleNameChange(value) {
  return function (dispatch) {
    dispatch({
        type: NAME_CHANGED,
        payload: value,
    })
  }
};

export function handleDescriptionChange(value) {
  return function (dispatch) {
    dispatch({
        type: DESCRIPTION_CHANGED,
        payload: value,
    })
  }
};

export function handleClickBox() {
  return function (dispatch, getState) {
    let value = null;
    if (getState().PlaylistReducer.check_box_state === false) {
      value = true
    } else if (getState().PlaylistReducer.check_box_state === true) {
      value = false
    };
    dispatch({
        type: CHECK_BOX,
        payload: value,
    })
  }
};

export function handleNameSubmit() {
  return function (dispatch) {
    dispatch({
        type: NAME_SUBMIT,
        payload: false,
    })
    dispatch(playlistCreate());
  }
};

export function playlistCreate() {
  return function (dispatch, getState) {
    const state = getState().PlaylistReducer;

    const token = state.token;

    const user_id = state.user_info.id;
    const playlist_name = state.playlist_name;
    const playlist_description = state.playlist_description;
    let playlist_state = true;
    if (state.check_box_state === true) {
      playlist_state = false
    };

    const root_endpoint = "https://api.spotify.com/v1/users/";
    const params = `${user_id}/playlists`;
    const final_endpoint = `${root_endpoint}${params}`;

    const body_data = {
      name: playlist_name,
      public: playlist_state,
      description: `${playlist_description} @Created by Soundiversify.`
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
      console.log(data)
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
    const state = getState().PlaylistReducer.playlistData;
    const one = state[0].uri;
    const two = state[1].uri;
    const three = state[2].uri;
    const four = state[3].uri;
    const five = state[4].uri;
    const six = state[5].uri;
    const seven = state[6].uri;
    const eight = state[7].uri;
    const nine = state[8].uri;
    const ten = state[9].uri;

    const token = getState().PlaylistReducer.token;
    const playlist_id = getState().PlaylistReducer.playlist_id;
    const tracks_object = {
      "uris": [one, two, three, four, five, six, seven, eight, nine, ten]
    };

    fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?`, {
      method: 'POST',
      body: JSON.stringify(tracks_object),
      headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {if (res.ok) {dispatch(playlist_success())}})
    .catch(error => {console.error('Error:', error)});
  };
};

export function playlist_success() {
  return function (dispatch) {
    dispatch({
        type: SUCCESS,
        payload: true,
    })
  }
};
