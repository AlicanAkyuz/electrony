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
} from '../actions/selection_actions/action_types';

const initialState = {
  select: {
    activeStep: 10,
    dialogOpen: false
  },
  user_selection: {
    genre: 'rock',
    danceability: '0.1',
    acousticness: '0.1',
    energy: '0.9',
    instrumentalness: '1.0',
    key: '4',
    loudness: '0.9',
    mode: '0',
    popularity: '100',
    tempo: '0.1',
    valence: '0.9'
  },
  titles: {
    danceability: "Danceability",
    acousticness: "Acousticness",
    energy: "Energy",
    instrumentalness: "Instrumentalness",
    key: "Key",
    loudness: "Loudness",
    mode: "Mode",
    popularity: "Popularity",
    tempo: "Tempo",
    valence: "Valence",
  },
  submitted: false,
};

function SelectionReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case DIALOG_OPEN: {
      const newState = Object.assign({}, state);
      newState.select.dialogOpen = action.payload
      return newState;
    }
    case DIALOG_CLOSE: {
      const newState = Object.assign({}, state);
      newState.select.dialogOpen = action.payload;
      newState.select.activeStep = state.select.activeStep + action.stepPayload
      return newState;
    }
    case DANCE_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.danceability = action.payload;
      return newState;
    }
    case ACOUSTIC_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.acousticness = action.payload;
      return newState;
    }
    case ENERGY_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.energy = action.payload;
      return newState;
    }
    case INS_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.instrumentalness = action.payload;
      return newState;
    }
    case KEY_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.key = action.payload;
      return newState;
    }
    case LOUD_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.loudness = action.payload;
      return newState;
    }
    case MODE_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.mode = action.payload;
      return newState;
    }
    case POP_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.popularity = action.payload;
      return newState;
    }
    case TEMPO_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.tempo = action.payload;
      return newState;
    }
    case VAL_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.valence = action.payload;
      return newState;
    }
    case SEL_SUBMIT: {
      const newState = Object.assign({}, state);
      newState.submitted = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default SelectionReducer;
