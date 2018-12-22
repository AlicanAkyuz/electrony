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
    genre: "Select the genre that best describes what you are looking for",
    danceability: "Do you feel like taking the floor and dancing?",
    energy: "Some songs are more energizing than energy drinks ;)",
    key: "Do you need your playlsit to be in a particular key?",
    loudness: "There is no shame in wishing for some serenity!",
    mode: "How about mode, if we may ask? ",
    tempo: "You know, some people prefer it slow",
    positiveness: "Music has a significant effect on one's mood, so...",
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
