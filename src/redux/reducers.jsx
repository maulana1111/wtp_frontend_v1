// reducers.js

import { FETCH_DATA_LOGIN_SUCCESS, FETCH_DATA_LOGIN_REQUEST, FETCH_DATA_LOGIN_FAILURE } from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_DATA_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
