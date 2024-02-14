// thunks.js

import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Set konfigurasi default untuk setiap permintaan API
api.interceptors.request.use((config) => {
  // Mendapatkan token dari tempat penyimpanan yang sesuai (misalnya localStorage)
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.nb3fmCpvFMm9IBiCwMm9tshnnH_BaVECqRKmtpvgu58";
  // const token = localStorage.getItem('accessToken');

  // Menambahkan token ke header jika tersedia
  // if (token) {
  //   config.headers.Authorization = `${token}`;
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept"] = "application/json";
  // }
  return config;
});

const requestData = (method, url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    try {
      switch (method) {
        // GET tanpa TOKEN
        case "GET":
          api
            .get(url, { params: data })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
          break;
        // GET dengan TOKEN
        case "GET_RESTRICT":
          api
            .get(url, { ...config, params: data })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
          break;
        case "POST":
          api
            .post(url, data, config)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
          break;
        case "PATCH":
          api
            .patch(url, data, config)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
          break;
        case "DELETE":
          api
            .delete(url, data, config)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Token expired, redirect to the specified URL
        window.location.href = "/login";
      } else {
        reject(new Error(error.message)); // Melempar error
      }
    }
  });
};

export default requestData;
