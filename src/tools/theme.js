/* eslint-disable import/no-anonymous-default-export */

/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/tools/styles.js
  Description:  Tool that sets or gets theme by using localStorage. Checks validity by using checker tools.
*/

import checker from './checker';

const themes = () => {
  return ['dark','light'];
};

const checkTheme = () => {
  let theme = localStorage.getItem('rff.io.theme');
  if (theme && checker.themeIsValid(theme)) {
    return {
      action: 'check',
      theme: theme,
      status: 'done'
    };
  } else {
    setDark();
    theme = localStorage.getItem('rff.io.theme');
    return {
      action: 'autoSet',
      theme: theme,
      status: 'done'
    };
  }
};

const setTheme = (theme) => {
  if (checker.themeIsValid(theme)) {
    switch (theme) {
      case 'light': {
        setLight();
        break;
      }
      case 'dark': {
        setDark();
        break;
      }
      default: {
        setDark();
        break;
      }
    }
    return null;
  } else {
    setDark();
    return null;
  }
};

const setLight = () => {
  localStorage.setItem('rff.io.theme', 'light');
};

const setDark = () => {
  localStorage.setItem('rff.io.theme', 'dark');
};

export default {
  checkTheme, setTheme, themes
};