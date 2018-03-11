export const TOGGLE_LOOP = 'TOGGLE_LOOP';
export const SET_SPEED = 'SET_SPEED';

export function toggleLoop() {
  return {
    type: TOGGLE_LOOP
  };
}

export function setSpeed(speed) {
  return {
    type: SET_SPEED,
    payload: {
      speed
    }
  };
}
