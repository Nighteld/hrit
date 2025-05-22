import {
  IsUserLogin,
  removeCookieStorage,
  removeLocalStorage,
  updateCookieStorage,
  updateLocalStorage,
} from "@/utils/helper";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  login: (userData: LoginData) => void;
  logout: () => void;
}
type LoginData = {
  encrypted: string;
  encryptedToken: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(() => {
    const storedUser = IsUserLogin();
    return storedUser ? storedUser : null; // Convert boolean to string or null
  });

  const login = ({ encrypted, encryptedToken }: LoginData) => {
    debugger;
    setUser(encrypted);
    updateLocalStorage({ key: "USER_LOGIN", value: encrypted });
    updateCookieStorage({ key: "ACCESS_TOKEN", value: encryptedToken });
  };

  const logout = () => {
    setUser(null);
    removeLocalStorage("USER_LOGIN");
    removeLocalStorage("EXPIRY_DATE");
    removeCookieStorage("APP_TOKEN");
    removeCookieStorage("ACCESS_TOKEN");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
