import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { decrypt } from "./encrypted";
interface StorageUpdate {
  key: string;
  value: any;
}

export const toastSuccess = (value: String) => {
  toast(value, {
    position: "bottom-right",
    autoClose: 3000,
    type: "success",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
export const toastError = (value: string) => {
  toast(value, {
    position: "bottom-right",
    type: "error",
    autoClose: 3000,
    closeButton: true,
    closeOnClick: true,
    hideProgressBar: false,
  });
};

export const toastWarning = (value: string) => {
  toast(value, {
    position: "bottom-right",
    autoClose: 3000,
    type: "warning",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const updateLocalStorage = ({ key, value }: StorageUpdate): void => {
  localStorage.setItem(key, value);
};

export const updateCookieStorage = ({ key, value }: StorageUpdate): void => {
  Cookies.set(key, value, { expires: 7, path: "" });
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
export const removeCookieStorage = (key: string): void => {
  Cookies.remove(key, { path: "" });
};

export const getAccessToken = () => {
  const accessToken = Cookies.get("ACCESS_TOKEN");
  if (!accessToken) {
    throw new Error("Access token is missing");
  }
  return decrypt(accessToken);
};

export const getAppToken = () => {
  const accessToken = Cookies.get("APP_TOKEN");
  if (!accessToken) {
    throw new Error("Access token is missing");
  }
  return accessToken;
};
export const getLoggedInUser = (): Record<string, any> | string => {
  const userLogin = localStorage.getItem("USER_LOGIN");

  // Check if the userLogin exists and decrypt it
  const decrypted = userLogin ? decrypt(userLogin) : null;

  // If decryption fails or returns null, return an empty string or handle as needed
  if (!decrypted) {
    return "";
  }

  try {
    // Parse the decrypted string into JSON
    return JSON.parse(decrypted);
  } catch (error) {
    console.error("Error parsing user data:", error);
    return "";
  }
};

export const IsUserLogin = () => {
  return Cookies.get("ACCESS_TOKEN") && getLoggedInUser()
    ? getLoggedInUser()
    : null;
};
