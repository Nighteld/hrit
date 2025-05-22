import axios from "axios";
import API_ENDPOINTS from "./apiList";
import {
  getAccessToken,
  getAppToken,
  getLocalStorage,
  toastError,
  updateCookieStorage,
  updateLocalStorage,
} from "./helper";
const currentTime = Date.now();
const TWENTY_MINUTES = 20 * 60 * 1000;
const targetTime = currentTime + TWENTY_MINUTES;
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
export const fetchToken = async () => {
  console.log("getAccessToken",getAccessToken());
  try {
    const response = await axios.post(
      import.meta.env.VITE_BASE_URL + API_ENDPOINTS.generateToken,
      {
        userToken: getAccessToken(),
      }
    );
    const {
      data: { tokenString },
    } = response;
    if (!tokenString) {
      throw new Error("Token string is undefined");
    }
    // console.log("targetTime.getMinutes()",targetTime.getMinutes())
    updateCookieStorage({ key: "APP_TOKEN", value: tokenString });
    updateLocalStorage({
      key: "EXPIRY_DATE",
      value: targetTime.toString(),
    });
    return tokenString;
    // console.log("token",expiryDate.toString());

    // if (response.data.responseCode !== "0") {
    //   return toastError(response.data.responseMessage);
    // }
  } catch (error: unknown) {
    const errorAsError = error as Error;
    console.error("Error in login API:", errorAsError);
    toastError(errorAsError.message);
  }
};
export const isTokenExpired = () => {
  const expiry = getLocalStorage({ key: "EXPIRY_DATE" });
  return !expiry || Date.now() > Number(expiry);
};

api.interceptors.request.use(
  async (config) => {
    let token: string | null = null;
    debugger;
    if (isTokenExpired()) {
      token = await fetchToken(); // await is needed here
    } else {
      token = getAppToken();
    }
    // else {
    //   const data = getTokenData();
    //   token = data.token!;
    // }

    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
