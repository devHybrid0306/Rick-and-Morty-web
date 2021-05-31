import { combineReducers } from 'redux';
import character from './character.reducer';
import episode from './episode.reducer';

export const rootReducer = combineReducers({ character, episode });
