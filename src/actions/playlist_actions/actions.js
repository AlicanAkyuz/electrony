import { CHARGING,
         PLAYLIST_FAILURE,
         FETCH_SUCCESS,
         PLAYLIST_SUCCESS,
         DETAILS_BOX_OPEN,
         NAME_CHANGED,
         DESCRIPTION_CHANGED,
         CHECK_BOX,
         DETAILS_BOX_CLOSE,
         USER_INFO,
         PLAYLIST_ID,
         PLAYLIST_CREATED
       } from './action_types';

export function handleSelectionSubmit() {
  return function (dispatch, getState) {
    dispatch(playlist_charging());

    const token = getState().SelectionReducer.user_data.user_token;
    const state = getState().SelectionReducer.user_selection;
    const data = {
      genre: state.genre.toLowerCase(),
      danceability: state.danceability,
      energy: state.energy,
      key: state.key,
      loudness: state.loudness,
      mode: state.mode,
      tempo: state.tempo,
      positiveness: state.positiveness,
    };

    let genreString;
    if (data.genre === "electronic-classic") {
      genreString = "electronic"
    } else if (data.genre === "electronic-dance") {
      genreString = "edm"
    } else {
      genreString = data.genre
    }

    let keyNumber;
    if (data.key === "C") {
      keyNumber = 0
    } else if (data.key === "C#") {
      keyNumber = 1
    } else if (data.key === "D") {
      keyNumber = 2
    } else if (data.key === "D#") {
      keyNumber = 3
    } else if (data.key === "E") {
      keyNumber = 4
    } else if (data.key === "F") {
      keyNumber = 5
    } else if (data.key === "F#") {
      keyNumber = 6
    } else if (data.key === "G") {
      keyNumber = 7
    } else if (data.key === "G#") {
      keyNumber = 8
    } else if (data.key === "A") {
      keyNumber = 9
    } else if (data.key === "A#") {
      keyNumber = 10
    } else if (data.key === "B") {
      keyNumber = 11
    };

    let loudnessFloat;
    if (data.loudness === "-60dB") {
      loudnessFloat = 0.0
    } else if (data.loudness === "-55dB" || data.loudness === "-50dB") {
      loudnessFloat = 0.1
    } else if (data.loudness === "-45dB") {
      loudnessFloat = 0.2
    } else if (data.loudness === "-40dB") {
      loudnessFloat = 0.3
    } else if (data.loudness === "-35dB") {
      loudnessFloat = 0.4
    } else if (data.loudness === "-30dB") {
      loudnessFloat = 0.5
    } else if (data.loudness === "-25dB" || data.loudness === "-20dB") {
      loudnessFloat = 0.6
    } else if (data.loudness === "-15dB") {
      loudnessFloat = 0.7
    } else if (data.loudness === "-10dB") {
      loudnessFloat = 0.8
    } else if (data.loudness === "-5dB") {
      loudnessFloat = 0.9
    } else if (data.loudness === "0dB") {
      loudnessFloat = 1.0
    };

    let modeNumber;
    if (data.mode === "Major") {
      modeNumber = 1
    } else if (data.mode === "Minor") {
      modeNumber = 0
    };

    let tempoFloat;
    if (data.popularity === "60-70 BPM") {
      tempoFloat = 0
    } else if (data.tempo === "71-80 BPM") {
      tempoFloat = 0.1
    } else if (data.tempo === "81-90 BPM") {
      tempoFloat = 0.2
    } else if (data.tempo === "91-100 BPM") {
      tempoFloat = 0.3
    } else if (data.tempo === "101-110 BPM") {
      tempoFloat = 0.4
    } else if (data.tempo === "111-120 BPM") {
      tempoFloat = 0.5
    } else if (data.tempo === "121-130 BPM") {
      tempoFloat = 0.6
    } else if (data.tempo === "131-140 BPM") {
      tempoFloat = 0.7
    } else if (data.tempo === "141-150 BPM") {
      tempoFloat = 0.8
    } else if (data.tempo === "151-160 BPM") {
      tempoFloat = 0.9
    } else if (data.tempo === "+161 BPM") {
      tempoFloat = 1.0
    };

    const params = {
      genre: `seed_genres=${genreString}`,
      danceability: `target_danceability=${data.danceability}`,
      energy: `target_energy=${data.energy}`,
      key: `target_key=${keyNumber}`,
      loudness: `target_loudness=${loudnessFloat}`,
      mode: `target_mode=${modeNumber}`,
      tempo: `target_tempo=${tempoFloat}`,
      positiveness: `target_valence=${data.positiveness}`,
      instrumentalness: "min_instrumentalness=0.65",
    };

    const root_endpoint = 'https://api.spotify.com/v1/recommendations?limit=55';
    const final_endpoint = `${root_endpoint}&${params.genre}&${params.danceability}&${params.instrumentalness}&${params.energy}&${params.key}&${params.loudness}&${params.mode}&${params.tempo}&${params.positiveness}`

    fetch(final_endpoint, {
      headers: {'Authorization': "Bearer " + token}
    })
    .then(response => response.json())
    .then(function(spotifyData) {
      dispatch(fetch_success(spotifyData));
    })
    .catch(error => console.error('Error:', error));
  };
};

export function playlist_charging() {
  return function (dispatch) {
    dispatch({
        type: CHARGING,
        payload: true,
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

export function fetch_success(spotifyData) {
  return function (dispatch) {
    dispatch({
        type: FETCH_SUCCESS,
        payload: spotifyData.tracks
    })
    dispatch(playlist_success());
  }
};

export function playlist_success(spotifyData) {
  return function (dispatch) {
    dispatch({
        type: PLAYLIST_SUCCESS,
        payload: true
    })
  }
};

export function details_box_open() {
  return function (dispatch) {
    dispatch({
        type: DETAILS_BOX_OPEN,
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

export function handleDetailsSubmit() {
  return function (dispatch) {
    dispatch({
        type: DETAILS_BOX_CLOSE,
        payload: false,
    })
    dispatch(getUserID());
  }
};

export function getUserID() {
  return function (dispatch, getState) {
    const token = getState().SelectionReducer.user_data.user_token;
    fetch("https://api.spotify.com/v1/me", {
      headers: {'Authorization': "Bearer " + token}
    })
    .then(response => response.json())
    .then(function(user_info) {
      const user_name = user_info.display_name;
      const user_id = user_info.id
      dispatch({
          type: USER_INFO,
          payload: user_name,
          payloadTwo: user_id
      })
      dispatch(playlistCreate());
    })
    .catch(error => console.error('Error:', error));
  };
};

export function playlistCreate() {
  return function (dispatch, getState) {

    const token = getState().SelectionReducer.user_data.user_token;
    const playlist_name = getState().PlaylistReducer.playlist_name;
    const playlist_description = getState().PlaylistReducer.playlist_description;
    const playlist_state = !getState().PlaylistReducer.check_box_state;
    const user_id = getState().PlaylistReducer.user_id;

    const root_endpoint = "https://api.spotify.com/v1/users/";
    const params = `${user_id}/playlists`;
    const final_endpoint = `${root_endpoint}${params}`;
    const body_data = {
      name: playlist_name,
      public: playlist_state,
      description: `${playlist_description} @Created by Electronify.`
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
    const state = getState().PlaylistReducer.tracks;
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
    const eleven = state[10].uri;
    const twelve = state[11].uri;
    const thirteen = state[12].uri;
    const fourteen = state[13].uri;
    const fifteen = state[14].uri;
    const sixteen = state[15].uri;
    const seventeen = state[16].uri;
    const eighteen = state[17].uri;
    const nineteen = state[18].uri;
    const twenty = state[19].uri;
    const twentyone = state[20].uri;

    const token = getState().SelectionReducer.user_data.user_token;
    const playlist_id = getState().PlaylistReducer.playlist_id;
    const tracks_object = {
      "uris": [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone]
    };

    fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?`, {
      method: 'POST',
      body: JSON.stringify(tracks_object),
      headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        dispatch(playlist_upload_success())
      }
    })
    .catch(error => {console.error('Error:', error)});
  };
};

export function playlist_upload_success() {
  return function (dispatch) {
    dispatch({
        type: PLAYLIST_CREATED,
        payload: true,
    })
  }
};
