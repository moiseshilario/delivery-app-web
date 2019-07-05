/**
 * Action Types
 */
export const Types = {
  SIGN_REQUEST: 'user/SIGN_REQUEST',
  SIGN_SUCCESS: 'user/SIGN_SUCCESS',

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

  logout: () => ({
    type: Types.LOGOUT,
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
    case Types.LOGOUT:
      return { signedIn: false, token: null, loggedUser: null };
    default:
      return state;
  }
}
