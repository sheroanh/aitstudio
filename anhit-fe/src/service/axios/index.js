import axios from "axios";

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  withCredentials: true,
});

export const request = async ( method, path, param ) => {
  return new Promise((resolve, reject) => {
    switch (method) {
      case "get":
        Axios.get(path, param).then((res) => {
          return resolve(res);
        });
        break;
      case "post":
        Axios.post(path, param).then((res) => {
          return resolve(res);
        });
        break;
      default:
        Axios.get(path, param).then((res) => {
          return resolve(res);
        });
    }
  });
};

