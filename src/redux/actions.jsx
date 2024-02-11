// actions.js

export const FETCH_DATA_LOGIN_REQUEST = 'FETCH_DATA_LOGIN_REQUEST';
export const FETCH_DATA_LOGIN_SUCCESS = 'FETCH_DATA_LOGIN_SUCCESS';
export const FETCH_DATA_LOGIN_FAILURE = 'FETCH_DATA_LOGIN_FAILURE';

export const fetchDataLoginRequest = () => ({
  type: FETCH_DATA_LOGIN_REQUEST
});

export const fetchDataLoginSuccess = data => ({
  type: FETCH_DATA_LOGIN_SUCCESS,
  payload: data
});

export const fetchDataLoginFailure = error => ({
  type: FETCH_DATA_LOGIN_FAILURE,
  payload: error
});
