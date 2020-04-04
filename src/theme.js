import React from 'react';

export const Theme = {
  lightTheme: {
    primaryColor: '#1da0f2',
    primaryTextColor: '#000000',
    primaryTextColorLight: '#3C4043',
    font: {
      regular: {
        fontFamily: 'Merriweather-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Merriweather-Italice',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Merriweather-Light',
        fontWeight: 'normal',
      },
    },
    backgroundColor: '#ffffff',
    surfaceBackgroundColor: '#ffffff',
  },
  darkTheme: {
    primaryColor: '#1da0f2',
    primaryTextColor: '#ffffff',
    primaryTextColorLight: '#ffffff',
    font: {
      regular: {
        fontFamily: 'Merriweather-Regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Merriweather-Italice',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Merriweather-Light',
        fontWeight: 'normal',
      },
    },
    backgroundColor: '#000000',
    surfaceBackgroundColor: '#000000',
  },
};

export const ThemeContext = React.createContext(Theme.lightTheme);
