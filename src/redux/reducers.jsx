// reducers.js
import {
  FETCH_SUCCESS_LOGIN,
  FETCH_SUCCESS_MENU,
  FETCH_REQUEST,
  FETCH_FAILURE,
} from "./actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
  auth_user: {
    refresh_token: "",
    access_token: "",
    authorities: {},
  },
  menu_state: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case FETCH_SUCCESS_LOGIN:
      return {
        ...state,
        auth_user: {
          ...state,
          refresh_token: action.payload.refresh_token,
          access_token: action.payload.access_token,
          authorities: action.payload.authorities,
        },
      };

    // MENU
    case FETCH_SUCCESS_MENU:
      return {
        ...state,
        menu_state: action.payload,
      };

    // REQUEST AND FAILED
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
