import { combineReducers } from 'redux';
import ContactReducer from './contact_reducer';
import SelectionReducer from './selection_reducer';

const rootReducer = combineReducers({ContactReducer, SelectionReducer})

export default rootReducer;
