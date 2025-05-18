import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { getAppToken } from "@/utils/helper";

export const fetchJsonFromExcel = async (param: any) => {
  try {
    const response = await api.post(API_ENDPOINTS.getJsonFromExcel, param, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.responseCode !== "0") {
      return [];
    }

    return response.data.data;
  } catch (error) {
    throw error; // Let TanStack Query handle the error
  }
};
export const fetchUserProfileDetails = async (param: any) => {
  try {
    const response = await api.post(API_ENDPOINTS.GetUserDetail, param, {
      headers: {
        Authorization: "Bearer " + getAppToken(),

        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.data.responseCode !== "0") {
      return [];
    }

    return response.data.data;
  } catch (error) {
    throw error; // Let TanStack Query handle the error
  }
};
