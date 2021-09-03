  
import { combineReducers } from 'redux';
import countriesStore from './countriesReducer';
import anchoredStore from './anchoredReducer';

const appReducer = combineReducers({
    countriesStore: countriesStore,
    anchoredStore: anchoredStore,
});

export default appReducer;