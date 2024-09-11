import React, { createContext } from "react";

export interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  themeDirection: string;
  setThemeDirection: React.Dispatch<React.SetStateAction<string>>;
  themeColor: string;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
  layoutType: string;
  setLayoutType: React.Dispatch<React.SetStateAction<string>>;
  containerOption: string;
  setContainerOption: React.Dispatch<React.SetStateAction<string>>;
  sidebarType: string;
  setSidebarType: React.Dispatch<React.SetStateAction<string>>;
  cardWith: string;
  setCardWith: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
