import { combineReducers } from 'redux';
import ContactReducer from './contact_reducer';
import SelectionReducer from './selection_reducer';
import PlaylistReducer from './playlist_reducer';

const rootReducer = combineReducers({ContactReducer, SelectionReducer, PlaylistReducer})

export default rootReducer;
