import { SAMPLE_ACTION } from '../actions/actions';

const initialState = {
  sampleState: null,
};

const sampleReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SAMPLE_ACTION:
      return state;
    default:
      return state;
  }
};

export default sampleReducer;
