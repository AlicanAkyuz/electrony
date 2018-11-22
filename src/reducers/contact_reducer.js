import {
  NAME_UPDATE,
  EMAIL_UPDATE,
  MESSAGE_UPDATE,
  SUBMITTED,
  ERROR,
  LOADING,
  FETCH_START_SUCCESS,
  FETCH_START_FAILURE,
  RESET
} from '../actions/contact_actions/action_types';

const initialState = {
  form: {
    name: '',
    email: '',
    message: ''
  },
  submitted: false,
  error: false,
  isLoading: false,
  loadingContent: {
    title: "Just a second...",
    content: "Please wait while your message is being processed..."
  },
  isSuccess: false,
  successContent: {
    title: "Thanks!",
    content: "Your message is received. We will contact you shortly."
  },
  isFailure: false,
  failureContent: {
    title: "There has been a problem!",
    content: "Sorry, there has been a server problem. Please try again."
  },
  errorArray: []
};

function ContactReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case NAME_UPDATE: {
      const newState = Object.assign({}, state);
      newState.form.name = action.payload;
      return newState;
    }
    case EMAIL_UPDATE: {
      const newState = Object.assign({}, state);
      newState.form.email = action.payload;
      return newState;
    }
    case MESSAGE_UPDATE: {
      const newState = Object.assign({}, state);
      newState.form.message = action.payload;
      return newState;
    }
    case SUBMITTED:
      return Object.assign({}, state, {
            submitted: action.payload
        });
    case ERROR:
      return Object.assign({}, state, {
            error: action.payload,
            errorArray: action.foundError
        });
    case LOADING:
      return Object.assign({}, state, {
            isLoading: action.payload
        });
    case FETCH_START_SUCCESS:
      return Object.assign({}, state, {
            isSuccess: action.payload
        });
    case FETCH_START_FAILURE:
      return Object.assign({}, state, {
            isFailure: action.payload
        });
    case RESET:
      return JSON.parse(JSON.stringify(initialState));
    default:
      return state;
  }
}

export default ContactReducer;
