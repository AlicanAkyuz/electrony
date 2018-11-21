import {
  RENDER_PLAYLIST,
  PLAYLIST_SUCCESS,
  PLAYLIST_FAILURE
} from './action_types';

export function sendFetch() {
  return function (dispatch, getState) {
    dispatch(fetch_starting());
    fetch('http://localhost:3000/getTenSongs')
    .then(function(response) {
      return response.json();
    })
    .then(function(artist_info) {
      dispatch(playlist_success(artist_info));
    })
    .catch(error => {
      dispatch(playlist_failure());
      console.error('Error:', error)
    });
  };
};

export function fetch_starting() {
    return function (dispatch) {
        dispatch({
            type: RENDER_PLAYLIST,
            payload: true,
        })
    }
};

export function playlist_success(artist_info) {
    return function (dispatch) {
        dispatch({
            type: PLAYLIST_SUCCESS,
            payload: true,
            artist_info: artist_info
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
