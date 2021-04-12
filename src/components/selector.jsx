import React, {useContext, Fragment} from 'react';

import checker from '../tools/checker';
import language from '../tools/language';
import theme from '../tools/theme';
import wrapTextDev from '../tools/wrapTextDev';
import styles from '../tools/styles';
import {Context, actionTypes} from '../controllers/state';

const ThemeSelector = (props) => {
  const [state, dispatch] = useContext(Context);

  const switchToTheme = (newTheme) => {
    if (checker.themeIsValid(newTheme)) {
      theme.setTheme(newTheme);
      document.getElementById('root').style.backgroundImage = styles.getBackgroundGradient(newTheme);
      dispatch({
        type: actionTypes[1],
        theme: newTheme
      });
    } else {
      theme.setTheme('dark');
      document.getElementById('root').style.backgroundImage = styles.getBackgroundGradient('dark');
      dispatch({
        type: actionTypes[1],
        theme: 'dark'
      });
    }
  };

  const lightThemeSelector = () => <button value='light' onClick={({target}) => switchToTheme(target.value)}>{'switch to light theme'}</button>;
  const darkThemeSelector = () => <button value='dark' onClick={({target}) => switchToTheme(target.value)}>{'switch to dark theme'}</button>;
  
  return state && state.theme
    ? <Fragment>
      {state.theme === 'dark' && lightThemeSelector()}
      {state.theme === 'light' && darkThemeSelector()}
    </Fragment>
    : null;
};

const LanguageSelector = (props) => {
  const [state, dispatch] = useContext(Context);
  
  const switchToLang = (newLang) => {
    if (checker.langIsValid(newLang)) {
      language.setLang(newLang);
      dispatch({
        type: actionTypes[0],
        language: newLang
      });
    } else {
      language.setLang('en');
      dispatch({
        type: actionTypes[0],
        language: 'en'
      });
    }
  };

  const finnishSelector = () => <button value='fi' onClick={({target}) => switchToLang(target.value)}>{'switch to finnish'}</button>;
  const englishSelector = () => <button value='en' onClick={({target}) => switchToLang(target.value)}>{'switch to english'}</button>;

  return state && state.language
    ? <Fragment>
      {state.language === 'en' && finnishSelector()}
      {state.language === 'fi' && englishSelector()}
    </Fragment>
    : null;
};

export default {
  LanguageSelector,
  ThemeSelector
};