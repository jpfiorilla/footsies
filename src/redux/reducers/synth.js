import { TOGGLE_LOOP } from '../actions/actions';

const initialState = {
  oscillator: {
    type: 'triangle'
  },
  envelope: {
    attack: 0.001,
    decay: 0.01,
    sustain: 0.05,
    release: 0.5
  }
};

const synthReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_LOOP:
      return { ...state, loop: !state.loop };
    default:
      return state;
  }
};

export default synthReducer;
