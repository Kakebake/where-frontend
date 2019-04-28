export const COMPLETE = 'Onboarding/COMPLETE';
export const RESET = 'Onboarding/RESET';

export const complete = () => ({
  type: COMPLETE
});
export const reset = () => ({
  type: RESET
});

const initialState = {
  complete: false,
  title: 'Where Fashion'
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case COMPLETE:
      return state.set('complete', true);
    case RESET:
      return initialState;
    default:
      return state;
  }
}
