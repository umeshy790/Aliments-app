import React from 'react';

const defualtFonts = {
  regular: {
    fontFamily: 'Merriweather-Regular',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'Merriweather-Italic',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'Merriweather-Light',
    fontWeight: 'normal',
  },
  bold: {
    fontFamily: 'Merriweather-Bold',
  },
};

function configFonts(fontConfig) {
  return fontConfig || defualtFonts;
}

export const Theme = {
  lightTheme: {
    primaryColor: '#1da0f2',
    primaryTextColor: '#000000',
    primaryTextColorLight: '#3C4043',
    font: configFonts(),
    backgroundColor: 'rgb(248, 250, 247)',
    surfaceBackgroundColor: '#ffffff',
    barStyle: 'dark-content',
  },
  darkTheme: {
    primaryColor: '#1da0f2',
    primaryTextColor: '#ffffff',
    primaryTextColorLight: '#ffffff',
    font: configFonts(),
    backgroundColor: '#121212',
    surfaceBackgroundColor: '#021923',
    barStyle: 'light-content',
  },
};

export const ThemeContext = React.createContext(Theme.lightTheme);
