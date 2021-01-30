import { useState, createContext } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../theme";
import { storeItem, getItemFromStorage } from "../utils/localStorage";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [isDarkThemeActive, setDarkThemeActive] = useState(
    getItemFromStorage("isDarkThemeActive")
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
