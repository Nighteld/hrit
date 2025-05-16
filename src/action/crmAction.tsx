

import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import apiPublic from "@/utils/apiPublic";
import { getAppToken } from "@/utils/helper";

export const fetchEventsCMS = async (param: any) => {
  try {
    const response = await apiPublic.post(API_ENDPOINTS.getEventsCMS, param, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",

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
