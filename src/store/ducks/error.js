/**
 * Action Types
 */
export const Types = {
  SET: 'error/SET',
  HIDE: 'error/HIDE',
};

/**
 * Action Creators
 */

export const Creators = {
  setError: message => ({
    type: Types.SET,
    payload: { message },
  }),
  hideError: () => ({ type: Types.HIDE }),
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  visible: false,
  message: null,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, message: action.payload.message };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}
