import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

export const globalState = createStore(rootReducer);