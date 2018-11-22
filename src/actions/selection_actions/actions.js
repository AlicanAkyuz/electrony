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
  VAL_SELECTED
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
