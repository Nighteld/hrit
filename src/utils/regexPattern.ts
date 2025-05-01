export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const alphabetRegex = /^[a-zA-Z ]+$/; //only text
export const NumberRegex = /^[0-9]+$/; //only text
export const phoneRegExp = /^[6-9]\d{9}$/; //10 digits number starting from 9
export const citizenShipRegEx = /^\d+([,/-]?\d+)*$/; // user input number only and accepted - , /
export const leadingZeroRegex = /^((?!(0))[0-9]+)$/; // number must not start from zero
export const addressRegEx = /^[a-zA-Z\\s\\, ]+$/;
export const leadingZeroRegexDot = /^((?!0\d)\d+(\.\d+)?|0(\.0+)?|0\.\d+)$/; // number must not start from zero and accept dot

// export const citizenShipRegEx = /^\d+([-\/]\d+)?$/;
const REGEX2 = /^\S*$/; //space
