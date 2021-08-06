import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { loginSpinerReducer } from './loginSpinerReducer';
import { rickReducer } from './rickReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    rick: rickReducer,
    formSpiner: loginSpinerReducer
});







