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
  RESET
} from '../actions/selection_actions/action_types';

const initialState = {
  welcomeText: "Now, let's get you what you want",
  select: {
    activeStep: 0,
    dialogOpen: false
  },
  user_selection: {
    genre: '',
    danceability: '',
    energy: '',
    key: '',
    loudness: '',
    mode: '',
    tempo: '',
    positiveness: ''
  },
  titles: {
    genre: "Select your genre",
    danceability: "Wanna danace?",
    energy: "Need energy?",
    key: "Any key preference?",
    loudness: "How loud can your ears take?",
    mode: "How about mode?",
    tempo: "Keep it down or keep it up!",
    positiveness: "Positive vibes only?",
  },
  user_data: {
    user_token: '',
    user_name: '',
    user_id: ''
  }
};

function SelectionReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case USER_DATA: {
      const newState = Object.assign({}, state);
      newState.user_data.user_token = action.payload.token;
      newState.user_data.user_name = action.payload.user_name;
      newState.user_data.user_id = action.payload.user_id;
      return newState;
    }
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
    case BACK_CLICK: {
      const newState = Object.assign({}, state);
      newState.select.activeStep = state.select.activeStep - action.payload
      return newState;
    }
    case GENRE_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.genre = action.payload;
      return newState;
    }
    case DANCE_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.danceability = action.payload;
      return newState;
    }
    case ENERGY_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.energy = action.payload;
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
    case TEMPO_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.tempo = action.payload;
      return newState;
    }
    case POS_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.positiveness = action.payload;
      return newState;
    }
    case RESET: {
      const newState = initialState;
      newState.welcomeText = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default SelectionReducer;
