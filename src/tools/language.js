
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
    return {
      action: 'set',
      lang: lang,
      status: 'done'
    };
  } else {
    let setLang = localStorage.getItem('rff.io.lang');
    if (!setLang) {
      localStorage.setItem('rff.io.lang', 'en');
      setLang = localStorage.getItem('rff.io.lang');
    }
    return {
      action: 'autoSet',
      lang: setLang,
      status: 'done'
    };
  }
}

export default {checkLang, setLang};