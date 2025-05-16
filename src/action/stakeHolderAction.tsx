import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { getAppToken } from "@/utils/helper";

export const fetchStakeHolderLists = async(param) =>
  await  api
      .post(API_ENDPOINTS.GetStakeHolderDetails, param,{
        headers: {
          Authorization: "Bearer " + getAppToken(),
  
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        if (res.data.responseCode !== "0") {
          return [];
          // return toastError(res.data.responseMessage);
        }
        return res.data.data;
        // const data: BranchItem[] = res.data.data;
        // return data.map((item: BranchItem) => ({
        //   label: item.address,
        //   value: item.branchId,
        // }));
      })
      .catch((err) => {
        throw err; // Let TanStack Query handle the error
      });