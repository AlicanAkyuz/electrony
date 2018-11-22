import { combineReducers } from 'redux';
import ContactReducer from './contact_reducer';
import SelectionReducer from './selection_reducer';
import PlaylistReducer from './playlist_reducer';
import AppReducer from './app_reducer';

const rootReducer = combineReducers({ContactReducer, SelectionReducer, PlaylistReducer, AppReducer})

export default rootReducer;
