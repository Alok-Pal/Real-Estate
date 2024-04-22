import axios from "axios";
// import Cookies from "js-cookie";
// import { useDispatch } from "react-redux";

const endPoint = process.env.REACT_APP_API_ENDPOINT;

const apiConfig = (flag = false) => {
  const accessToken = localStorage.getItem("AccessToken");
  if (accessToken) {
    return {
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": flag ? "multipart/form-data" : "application/json",
      },
      method: "PUT,DELETE,POST,GET,OPTION",
    };
  }
  return { withCredentials: false };
};

export const getApi = (url, params) => {
  return axios.get(`${endPoint}${url}`, {
    params: params,
    ...apiConfig(),
  });
};

export const postApi = (url, apiData, flag) => {
  return axios.post(`${endPoint}${url}`, apiData, apiConfig(flag));
};

export const putApi = (url, apiData, flag) => {
  return axios.put(`${endPoint}${url}`, apiData, apiConfig(flag));
};
