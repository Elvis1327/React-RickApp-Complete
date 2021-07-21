import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { rickReducer } from './rickReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    rick: rickReducer
})







