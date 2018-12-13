import {
  DIALOG_OPEN,
  DIALOG_CLOSE,
  GENRE_SELECTED,
  DANCE_SELECTED,
  ENERGY_SELECTED,
  KEY_SELECTED,
  LOUD_SELECTED,
  MODE_SELECTED,
  TEMPO_SELECTED,
  POS_SELECTED,
  TOKEN,
  RENDER_PLAYLIST,
  PLAYLIST_SUCCESS,
  PLAYLIST_FAILURE
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

export function handleSelectionSubmit(token) {
  return function (dispatch, getState) {
    dispatch(fetch_starting());
    dispatch({
        type: TOKEN,
        payload: token,
    });
    const state = getState().SelectionReducer.user_selection;
    const data = {
      genre: state.genre.toLowerCase(),
      danceability: state.danceability,
      energy: state.energy,
      key: state.key,
      loudness: state.loudness,
      mode: state.mode,
      tempo: state.tempo,
      valence: state.valence,
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
      valence: `target_valence=${data.valence}`
    };

    const root_endpoint = 'https://api.spotify.com/v1/recommendations?limit=10';
    const final_endpoint = `${root_endpoint}&${params.genre}&${params.danceability}&${params.energy}&${params.key}&${params.loudness}&${params.mode}&${params.tempo}&${params.valence}`

    fetch(final_endpoint, {
      headers: {'Authorization': "Bearer " + token}
    })
    .then(response => response.json())
    .then(function(spotifyData) {
      dispatch(playlist_success(spotifyData));
    })
    .catch(error => console.error('Error:', error));
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

export function playlist_failure() {
  return function (dispatch) {
    dispatch({
        type: PLAYLIST_FAILURE,
        payload: true,
    })
  }
};


export function playlist_success(spotifyData) {
  return function (dispatch) {
    dispatch({
        type: PLAYLIST_SUCCESS,
        payload: true,
        spotifyData: spotifyData
    })
  }
};
