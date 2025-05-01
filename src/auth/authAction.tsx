import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import {
  getAccessToken,
  toastError,
  updateCookieStorage,
} from "@/utils/helper";

export const GenerateToken = async () => {
  try {
    const response = await api.post(API_ENDPOINTS.generateToken, {
      userToken: getAccessToken(),
    });
    debugger;
    const {
      data: { tokenString },
    } = response;
    debugger;
    if (!tokenString) {
      throw new Error("Token string is undefined");
    }
    updateCookieStorage({ key: "APP_TOKEN", value: tokenString });

    // if (response.data.responseCode !== "0") {
    //   return toastError(response.data.responseMessage);
    // }
    debugger;
  } catch (error: unknown) {
    const errorAsError = error as Error;
    console.error("Error in login API:", errorAsError);
    toastError(errorAsError.message);
  }
};
