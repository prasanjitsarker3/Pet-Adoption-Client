import axios from "axios";
import { getFromLocalStorage } from "../Auth/localStorage";
import { authKey } from "../Common/auth";

const axiosInstance = axios.create();
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObj: any = {
      data: response.data,
      meta: response.data,
    };
    return responseObj;
  },

  async function (error) {
    const responseObj: any = {
      statusCode: error?.response?.data?.statusCode || 500,
      success: error?.response?.data?.success || false,
      message: error?.response?.data?.message || "Something went wrong !",
      errorMessage: error?.response?.data?.message || "Something went wrong !",
    };
    return responseObj;
  }
);

export { axiosInstance };
