
const OPT = Object.freeze({
  LANG: ['en','fi'],
  THEME: ['dark', 'light']
});

const langIsValid = (lang) => {
  return OPT.LANG.includes(lang);
};

const themeIsValid = (theme) => {
  return OPT.THEME.includes(theme);
};

export default {
  langIsValid, themeIsValid
};