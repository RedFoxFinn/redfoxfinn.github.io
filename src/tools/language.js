/* eslint-disable import/no-anonymous-default-export */

/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/tools/language.js
  Description:  Tool that sets or gets language by using localStorage. Checks language validity with checker tools
*/

import checker from './checker';

const checkLang = () => {
  const lang = localStorage.getItem('rff.io.lang');
  if (lang && checker.langIsValid(lang)) {
    return lang;
  } else {
    localStorage.setItem('rff.io.lang', 'en');
    return localStorage.getItem('rff.io.lang');
  }
};

const setLang = (lang) => {
  if (checker.langIsValid(lang)) {
    localStorage.setItem('rff.io.lang',lang);
    return {
      action: 'set',
      lang: lang,
      status: 'done'
    };
  } else {
    let setLang = localStorage.getItem('rff.io.lang');
    if (!setLang || !checker.langIsValid(setLang)) {
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