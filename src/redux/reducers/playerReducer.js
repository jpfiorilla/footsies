import { TOGGLE_LOOP, SET_SPEED } from '../actions/actions';

const initialState = {
  loop: false,
  tempo: 120 || 60 * 60,
  speed: 1,
  pitch: 'c4'
};

const playerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_LOOP:
      return { ...state, loop: !state.loop };
    case SET_SPEED:
      return { ...state, speed: Number(payload.speed) };
    default:
      return state;
  }
};

export default playerReducer;
