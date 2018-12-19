import {
  USER_DATA,
  DIALOG_OPEN,
  DIALOG_CLOSE,
  BACK_CLICK,
  GENRE_SELECTED,
  DANCE_SELECTED,
  ENERGY_SELECTED,
  KEY_SELECTED,
  LOUD_SELECTED,
  MODE_SELECTED,
  TEMPO_SELECTED,
  POS_SELECTED,
} from './action_types';

export function getUserData(token) {
  return function (dispatch) {
    fetch("https://api.spotify.com/v1/me", {
      headers: {'Authorization': "Bearer " + token}
    })
    .then(response => response.json())
    .then(function(userData) {
      dispatch({
          type: USER_DATA,
          payload: {
            token: token,
            user_name: userData.display_name,
            user_id: userData.id
          }
      });
    })
    .catch(error => console.error('Error:', error));
  }
};

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

export function onBackClick() {
  return function (dispatch) {
    dispatch({
        type: BACK_CLICK,
        payload: 1
    })
  }
};

export function handleGenreSelection(value) {
  return function (dispatch) {
    dispatch({
        type: GENRE_SELECTED,
        payload: value
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

export function handleEnergySelection(value) {
  return function (dispatch) {
    dispatch({
        type: ENERGY_SELECTED,
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

export function handleTempoSelection(value) {
  return function (dispatch) {
    dispatch({
        type: TEMPO_SELECTED,
        payload: value
    })
  }
};

export function handlePositivenessSelection(value) {
  return function (dispatch) {
    dispatch({
        type: POS_SELECTED,
        payload: value
    })
  }
};
