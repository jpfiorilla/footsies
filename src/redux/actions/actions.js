export const SAMPLE_ACTION = 'SAMPLE_ACTION';

export function sampleAction(sampleProp) {
  return {
    type: SAMPLE_ACTION,
    payload: {
      sampleProp,
    },
  };
}

export default { sampleAction };
