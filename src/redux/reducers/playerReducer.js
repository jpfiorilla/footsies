import { TOGGLE_LOOP } from '../actions/actions';

const initialState = {
  loop: false
};

const playerReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_LOOP:
      return { ...state, loop: !state.loop };
    default:
      return state;
  }
};

export default playerReducer;
