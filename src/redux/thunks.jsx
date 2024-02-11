// thunks.js

import axios from "axios";
import {
  fetchDataLoginRequest,
  fetchDataLoginSuccess,
  fetchDataLoginFailure,
} from "./actions";

const API_BASE_URL = process.env.BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchData = (url, config = {}) => {
  return async (dispatch) => {
    dispatch(fetchDataLoginRequest());
    try {
      const response = await api.get(url, config);
      dispatch(fetchDataLoginSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataLoginFailure(error.message));
    }
  };
};

// Jika Anda memerlukan operasi POST, PUT, DELETE, dll, tambahkan di sini
// Contoh:
export const postData = (url, data, config = {}) => {
  return async (dispatch) => {
    try {
      const response = await api.post(url, data, config);
      dispatch(fetchDataLoginSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataLoginFailure(error.message));
    }
  };
};
