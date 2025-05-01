import CryptoJS from "crypto-js";


const iv = CryptoJS.enc.Utf8.parse("8080808080808080");
const key = "0123456789abcdef"; // Consider storing this securely, e.g., in an environment variable

export const encrypt = (plaintext: string): string => {
    const cryptoKey = CryptoJS.enc.Utf8.parse(key);

    const encrypted = CryptoJS.AES.encrypt(plaintext, cryptoKey, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: iv,
    });

    return encrypted.toString();
};

export const decrypt = (ciphertext: string): string | null => {
    try {
        const cryptoKey = CryptoJS.enc.Utf8.parse(key);

        const decrypted = CryptoJS.AES.decrypt(ciphertext, cryptoKey, {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            iv: iv,
        });
        const result = decrypted.toString(CryptoJS.enc.Utf8);
        return result ? result : null;
    } catch (error) {
        console.error("Decryption failed:", error);
        // window.sessionStorage.clear();
        // window.localStorage.clear();
        // Cookies.remove("ACCESS_TOKEN");
        // window.location.replace("/");
        return null;
    }
};

// Hashing example
export const generateHmacSHA256 = (message: string, secret: string): string => {
    const hash = CryptoJS.HmacSHA256(message, secret);
    return CryptoJS.enc.Base64.stringify(hash);
};
