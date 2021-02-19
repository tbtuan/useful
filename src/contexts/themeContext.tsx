import { useState, createContext } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "theme";
import { storeItem, getItemFromStorage } from "utils/localStorage";
import React from "react";

interface Context {
  isDarkThemeActive: boolean;
  toggleActiveTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const ThemeContext: React.Context<Context> = createContext(null);

const ThemeProvider = ({ children }: Props) => {
  const [isDarkThemeActive, setDarkThemeActive] = useState(
    getItemFromStorage("isDarkThemeActive") === "true"
  );

  const toggleActiveTheme = () => {
    setDarkThemeActive((prevTheme) => !prevTheme);
    storeItem("isDarkThemeActive", !isDarkThemeActive);
  };

  return (
    <ThemeContext.Provider value={{ isDarkThemeActive, toggleActiveTheme }}>
      <EmotionThemeProvider theme={isDarkThemeActive ? darkTheme : lightTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
