import { ALLOWED_IMAGE_FILE_SIZE_MB, ALLOWED_IMAGE_FILE_TYPE, ALLOWED_XLSX_FILE_TYPE } from "./constant";
import { toastError } from "./helper";
import moment from "moment";

interface ImageFile {
    name: string;
    size: number;
  }
export const handleImageValidation = (e: ImageFile) => {
  const { name, size } = e;
  const fileName = name;
  const fileSize = size;
  const fileExtension = fileName?.split(".")?.pop()?.toLowerCase()??"";
  if (ALLOWED_IMAGE_FILE_TYPE.indexOf(fileExtension) === -1) {
    return toastError(
      "Invalid file type. Allowed types: " + ALLOWED_IMAGE_FILE_TYPE.join(", ")
    );
  } else if (fileSize > ALLOWED_IMAGE_FILE_SIZE_MB * 1024 * 1024) {
    return toastError(
      "Invalid file Size size must be :" + ALLOWED_IMAGE_FILE_SIZE_MB + "MB"
    );
  } else {
    return true;
  }
};

export const handleXLSXValidation = (e:ImageFile) => {
  const { name, size } = e;
  const fileName = name;
  const fileSize = size;
  const fileExtension = fileName?.split(".")?.pop()?.toLowerCase()??"";
  if (ALLOWED_XLSX_FILE_TYPE.indexOf(fileExtension) === -1) {
    return toastError(
      "Invalid file type. Allowed types: " + ALLOWED_XLSX_FILE_TYPE.join(", ")
    );
  } else {
    return true;
  }
};


export const dateFormatter = (date: string | Date) => {
  if (!date) return null;
  return moment(date).format("YYYY-MM-DD");
};

