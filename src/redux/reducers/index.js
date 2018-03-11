import { combineReducers } from 'redux';
import player from './playerReducer';
import synth from './synth';

export default combineReducers({ player, synth });
