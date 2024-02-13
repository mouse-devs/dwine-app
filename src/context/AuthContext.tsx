// context/AuthContext.tsx
"use client";
import { createContext, useState, ReactNode, FC } from "react";
import { AuthContextType } from "@/types/authContext";

export const authContextDefault: AuthContextType = {
  user: null,
  isLoggedIn: false,
  signIn: () => {},
  signOut: () => {},
};

export const AuthContext = createContext<AuthContextType>(authContextDefault);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = (user: string) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const signOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
