/**
 * Action Types
 */
export const Types = {
  GET_REQUEST: 'orders/GET_REQUEST',
  GET_SUCCESS: 'orders/GET_SUCCESS',
  GET_ERROR: 'orders/GET_ERROR',
};

/**
 * Action Creators
 */

export const Creators = {
  getOrderRequest: () => ({ type: Types.GET_REQUEST }),

  getOrdersuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getOrderError: error => ({
    type: Types.GET_SUCCESS,
    payload: { error },
  }),
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function orders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.GET_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
