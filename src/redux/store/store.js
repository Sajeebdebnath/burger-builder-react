import { createStore, applyMiddleware  } from 'redux';
import { BuildReducer } from '../reducer/BuildReducer';
import thunk from "redux-thunk"


export const store = createStore(BuildReducer, applyMiddleware(thunk))

