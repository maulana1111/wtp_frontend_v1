// actions.js

// login action
export const FETCH_SUCCESS_LOGIN = "FETCH_SUCCESS_LOGIN";

// menu action
export const FETCH_SUCCESS_MENU = "FETCH_SUCCESS_MENU";

// Success Failed Action
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchSuccessLogin = (data) => {
  return {
    type: FETCH_SUCCESS_LOGIN,
    payload: data,
  };
};

export const fetchSuccessMenu = (data) => ({
  type: FETCH_SUCCESS_MENU,
  payload: data,
});

export const fetchRequest = (data) => ({
  type: FETCH_REQUEST,
});

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});
