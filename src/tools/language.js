
const checkLang = () => {
  const lang = localStorage.getItem('rff.io.lang');
  if (lang) {
    return lang;
  } else {
    localStorage.setItem('rff.io.lang', 'en');
    return localStorage.getItem('rff.io.lang');
  }
};

const setLang = (lang) => {
  if (lang === 'en' || lang === 'fi') {
    localStorage.setItem('rff.io.lang',lang);
    return {};
  } else {
    return {};
  }
}

export default {checkLang, setLang};