import axios from "axios";
import React, { useEffect, useState } from "react";

export const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  withCredentials: true,
});

export const request = async (method, path, param) => {
  return new Promise((resolve, reject) => {
    switch (method) {
      case "get":
        Axios.get(path, param)
          .then((res) => {
            return resolve(res);
          })
          .catch((err) => resolve(err.response));
        break;
      case "post":
        Axios.post(path, param)
          .then((res) => {
            return resolve(res);
          })
          .catch((err) => resolve(err.response));
        break;
      default:
        Axios.get(path, param)
          .then((res) => {
            return resolve(res);
          })
          .catch((err) => resolve(err));
    }
  });
};

export const Fetch = (method, path, param) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    switch (method) {
      case "get":
        Axios.get(path, param)
          .then((res) => {
            setResponse(res);
          })
          .catch((err) => setError(err));
        break;
      case "post":
        Axios.post(path, param)
          .then((res) => {
            setResponse(res);
          })
          .catch((err) => setError(err));
        break;
      default:
        Axios.get(path, param)
          .then((res) => {
            setResponse(res);
          })
          .catch((err) => setError(err));
    }
  };

  useEffect(() => {
    fetchData();
  }, [method, path, param]);

  return [response, error];
};
