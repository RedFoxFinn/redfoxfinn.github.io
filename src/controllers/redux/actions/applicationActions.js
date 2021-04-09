
export const Types = {
  setThemeDark: 'SET_THEME_DARK',
  setThemeLight: 'SET_THEME_LIGHT',
  setTheme: 'SET_APPLICATION_THEME',
  setLangEn: 'SET_LANGUAGE_EN',
  setLangFi: 'SET_LANGUAGE_FI',
  setLang: 'SET_APPLICATION_LANGUAGE'
};

export const setTheme = (setThemeTo) => ({ type: Types.setTheme, setThemeTo: setThemeTo });
export const setLanguage = (setLangTo) => ({ type: Types.setLang, setLangTo: setLangTo });