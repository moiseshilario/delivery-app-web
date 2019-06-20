/**
 * Action Types
 */
export const Types = {
  LOGIN_REQUEST: 'user/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'user/LOGIN_SUCCESS',
  LOGIN_ERROR: 'user/LOGIN_ERROR',
  LOGOUT: 'user/LOGOUT',
};

/**
 * Action Creators
 */
export const Creators = {
  loginRequest: credentials => ({
    type: Types.LOGIN_REQUEST,
    payload: { credentials },
  }),

  loginSuccess: data => ({
    type: Types.LOGIN_SUCCESS,
    payload: { data },
  }),

  loginError: error => ({
    type: Types.LOGIN_ERROR,
    payload: { error },
  }),

  logout: () => ({
    type: Types.LOGOUT,
  }),
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    case Types.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
