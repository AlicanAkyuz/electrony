import {
  DIALOG_OPEN,
  DIALOG_CLOSE,
  DANCE_SELECTED,
  ACOUSTIC_SELECTED,
  ENERGY_SELECTED,
  INS_SELECTED,
  KEY_SELECTED,
  LOUD_SELECTED,
  MODE_SELECTED,
  POP_SELECTED,
  TEMPO_SELECTED,
  VAL_SELECTED,
  SEL_SUBMIT
} from './action_types';

export function onDialogOpen() {
  return function (dispatch) {
    dispatch({
        type: DIALOG_OPEN,
        payload: true
    })
  }
};

export function onDialogClose() {
  return function (dispatch) {
    dispatch({
        type: DIALOG_CLOSE,
        payload: false,
        stepPayload: 1
    })
  }
};

export function handleDanceabilitySelection(value) {
  return function (dispatch) {
    dispatch({
        type: DANCE_SELECTED,
        payload: value
    })
  }
};

export function handleAcousticnessSelection(value) {
  return function (dispatch) {
    dispatch({
        type: ACOUSTIC_SELECTED,
        payload: value
    })
  }
};

export function handleEnergySelection(value) {
  return function (dispatch) {
    dispatch({
        type: ENERGY_SELECTED,
        payload: value
    })
  }
};

export function handleInstrumentalnessSelection(value) {
  return function (dispatch) {
    dispatch({
        type: INS_SELECTED,
        payload: value
    })
  }
};

export function handleKeySelection(value) {
  return function (dispatch) {
    dispatch({
        type: KEY_SELECTED,
        payload: value
    })
  }
};

export function handleLoudnessSelection(value) {
  return function (dispatch) {
    dispatch({
        type: LOUD_SELECTED,
        payload: value
    })
  }
};

export function handleModeSelection(value) {
  return function (dispatch) {
    dispatch({
        type: MODE_SELECTED,
        payload: value
    })
  }
};

export function handlePopularitySelection(value) {
  return function (dispatch) {
    dispatch({
        type: POP_SELECTED,
        payload: value
    })
  }
};

export function handleTempoSelection(value) {
  return function (dispatch) {
    dispatch({
        type: TEMPO_SELECTED,
        payload: value
    })
  }
};

export function handleValenceSelection(value) {
  return function (dispatch) {
    dispatch({
        type: VAL_SELECTED,
        payload: value
    })
  }
};

export function handleSelectionSubmit(token) {
  return function (dispatch, getState) {
    const state = getState().SelectionReducer.user_selection;
    const data = {
      genre: `seed_genres=${state.genre}`,
      danceability: `target_danceability=${state.danceability}`,
      acousticness: `target_acousticness=${state.acousticness}`,
      energy: `target_energy=${state.energy}`,
      instrumentalness: `target_instrumentalness=${state.instrumentalness}`,
      key: `target_key=${state.key}`,
      loudness: `target_loudness=${state.loudness}`,
      mode: `target_mode=${state.mode}`,
      popularity: `target_popularity=${state.popularity}`,
      tempo: `target_tempo=${state.tempo}`,
      valence: `target_valence=${state.valence}`
    };
    const root_endpoint = 'https://api.spotify.com/v1/recommendations?limit=10';
    const final_endpoint = `${root_endpoint}&${data.genre}&${data.danceability}&${data.acousticness}&${data.energy}&${data.instrumentalness}&${data.key}&${data.loudness}&${data.mode}&${data.popularity}&${data.tempo}&${data.valence}`
    console.log(final_endpoint);
    fetch(final_endpoint, {
      headers: {'Authorization': "Bearer " + token}
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };
};
