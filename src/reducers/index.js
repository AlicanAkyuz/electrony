import { combineReducers } from 'redux';
import SelectionReducer from './selection_reducer';
import PlaylistReducer from './playlist_reducer';

const rootReducer = combineReducers({SelectionReducer, PlaylistReducer})

export default rootReducer;
