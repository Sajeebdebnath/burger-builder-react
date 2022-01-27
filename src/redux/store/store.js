import { createStore } from 'redux';
import { BuildReducer } from '../reducer/BuildReducer';

export const store = createStore(BuildReducer)

