import {
  PLAY_CRE
} from './action_types';

export function playlistCreate(spotifyData) {
  return function (dispatch, getState) {
    dispatch({
        type: PLAY_CRE,
        payload: spotifyData
    })
  }
};
