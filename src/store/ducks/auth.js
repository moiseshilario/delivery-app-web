/**
 * Action Types
 */
export const Types = {
  SIGN_REQUEST: 'user/SIGN_REQUEST',
  SIGN_SUCCESS: 'user/SIGN_SUCCESS',
  SIGN_ERROR: 'user/SIGN_ERROR',
  LOGOUT: 'user/LOGOUT',
};

/**
 * Action Creators
 */
export const Creators = {
  signInRequest: (email, password) => ({
    type: Types.SIGN_REQUEST,
    payload: { email, password },
  }),

  signInSuccess: token => ({
    type: Types.SIGN_SUCCESS,
    payload: { token },
  }),
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  signedIn: !!localStorage.getItem('@DeliveryApp:token'),
  token: localStorage.getItem('@DeliveryApp:token'),
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_SUCCESS:
      return { ...state, signedIn: true, token: action.payload.token };
    default:
      return state;
  }
}
