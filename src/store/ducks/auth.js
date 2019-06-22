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

  signInSuccess: data => ({
    type: Types.SIGN_SUCCESS,
    payload: { data },
  }),
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  signedIn: !!localStorage.getItem('@DeliveryApp:token'),
  token: localStorage.getItem('@DeliveryApp:token'),
  loggedUser: JSON.parse(localStorage.getItem('@DeliveryApp:user')),
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_SUCCESS:
      return {
        ...state,
        signedIn: true,
        token: action.payload.data.token,
        loggedUser: action.payload.data.user,
      };
    default:
      return state;
  }
}
