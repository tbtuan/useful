import React, { useState, useEffect } from 'react';

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

import { lightTheme, darkTheme } from './index';
import Header from '../Header';
import { baseStyles } from '../styles/GlobalStyles';

export const ThemeContext = React.createContext({
  isDarkThemeActive2: false,
  toggleTheme: () => toggleActiveTheme(),
});

const ThemeProvider = props => {
  const [isDarkThemeActive, setDarkThemeActive] = useState(false);

  useEffect(() => {
    setDarkThemeActive(
      JSON.parse(window.localStorage.getItem('isDarkThemeActive')) === true ? true : false
    );
  });

  const toggleActiveTheme = () => {
    setDarkThemeActive(prevState => !prevState);

    window.localStorage.setItem('isDarkThemeActive', JSON.stringify(!isDarkThemeActive));
  };

  const { children, location } = props;

  return (
    <EmotionThemeProvider theme={isDarkThemeActive ? darkTheme : lightTheme}>
      <Global styles={baseStyles} />
      <Header
        location={location}
        isDarkThemeActive={isDarkThemeActive}
        toggleActiveTheme={toggleActiveTheme}
      />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
