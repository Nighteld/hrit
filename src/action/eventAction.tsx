

import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { getAppToken } from "@/utils/helper";

export const fetchEventLists = async (param: any) => {
  try {
    const response = await api.post(API_ENDPOINTS.getEvents, param, {
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
