/* eslint-disable import/no-anonymous-default-export */

/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/tools/text.js
  Description:  Text providing tool for project
*/

import packageInfo from '../../package.json';
import content from '../data/text.json';
import checker from './checker';

const author = () => {
  return packageInfo.author.toString();
};

const version = () => {
  return packageInfo.version.toString();
};

const appName = () => {
  return packageInfo.appName.toString();
};

const appId = () => {
  return packageInfo.appId.toString();
};

const about = (lang) => {
  const langIsValid = checker.langIsValid(lang);
  return langIsValid && lang === 'fi' ? content.about.fi : content.about.en;
};

const home = (lang) => {
  const langIsValid = checker.langIsValid(lang);
  return langIsValid && lang === 'fi' ? content.home.fi : content.home.en;
};

const navHome = (lang) => {
  const langIsValid = checker.langIsValid(lang);
  return langIsValid && lang === 'fi'
    ? content.navigation[0].fi.toString()
    : content.navigation[0].en.toString();
};

const navAbout = (lang) => {
  const langIsValid = checker.langIsValid(lang);
  return langIsValid && lang === 'fi'
    ? content.navigation[3].fi.toString()
    : content.navigation[3].en.toString();
};

const navCV = (lang) => {
  const langIsValid = checker.langIsValid(lang);
  return langIsValid && lang === 'fi'
    ? content.navigation[1].fi.toString()
    : content.navigation[1].en.toString();
};

const navLinks = (lang) => {
  const langIsValid = checker.langIsValid(lang);
  return langIsValid && lang === 'fi'
    ? content.navigation[2].fi.toString()
    : content.navigation[2].en.toString();
};

const dependencies = (lang) => {
  const langIsValid = checker.langIsValid(lang);
  return langIsValid && lang === 'fi'
    ? content.general.dependencies.fi.toString()
    : content.general.dependencies.en.toString();
}

const devDependencies = (lang) => {
  const langIsValid = checker.langIsValid(lang);
  return langIsValid && lang === 'fi'
    ? content.general.devDependencies.fi.toString()
    : content.general.devDependencies.en.toString();
};

const themeSelectorDark = (lang, current) => {
  const langIsValid = checker.langIsValid(lang);
  const themeIsValid = checker.themeIsValid(current);
  let text;
  if (langIsValid && themeIsValid) {
    if (lang === 'fi') {
      current === 'light'
        ? text = `${content.theme.dark.fi} ${content.theme.theme.fi}`
        : text = `${content.theme.dark.fi} ${content.theme.theme.fi} ${content.theme.selected.fi}`;
    } else {
      current === 'light'
        ? text = `${content.theme.dark.en} ${content.theme.theme.en}`
        : text = `${content.theme.dark.en} ${content.theme.theme.en} ${content.theme.selected.en}`;
    }
  } else if (!langIsValid && themeIsValid) {
    current === 'light'
        ? text = `${content.theme.dark.en} ${content.theme.theme.en}`
        : text = `${content.theme.dark.en} ${content.theme.theme.en} ${content.theme.selected.en}`;
  } else if (langIsValid && !themeIsValid) {
    lang === 'fi'
      ? text = `${content.theme.dark.fi} ${content.theme.theme.fi}`
      : text = `${content.theme.dark.en} ${content.theme.theme.en}`;
  } else {
    text = `${content.theme.dark.en} ${content.theme.theme.en}`
  }
  return text;
};

const themeSelectorLight = (lang, current) => {
  const langIsValid = checker.langIsValid(lang);
  const themeIsValid = checker.themeIsValid(current);
  let text;
  if (langIsValid && themeIsValid) {
    if (lang === 'fi') {
      current === 'dark'
        ? text = `${content.theme.light.fi} ${content.theme.theme.fi}`
        : text = `${content.theme.light.fi} ${content.theme.theme.fi} ${content.theme.selected.fi}`;
    } else {
      current === 'dark'
        ? text = `${content.theme.light.en} ${content.theme.theme.en}`
        : text = `${content.theme.light.en} ${content.theme.theme.en} ${content.theme.selected.en}`;
    }
  } else if (!langIsValid && themeIsValid) {
    current === 'dark'
        ? text = `${content.theme.light.en} ${content.theme.theme.en}`
        : text = `${content.theme.light.en} ${content.theme.theme.en} ${content.theme.selected.en}`;
  } else if (langIsValid && !themeIsValid) {
    lang === 'fi'
      ? text = `${content.theme.light.fi} ${content.theme.theme.fi}`
      : text = `${content.theme.light.en} ${content.theme.theme.en}`;
  } else {
    text = `${content.theme.light.en} ${content.theme.theme.en}`
  }
  return text;
};

const devSoftware = () => {
  return content.about.software_tools;
};

const packages = () => {
  return content.about.packages;
};

export default {
  author, version, appId, appName,
  about, home, devSoftware, packages,
  navHome, navAbout, navCV, navLinks,
  dependencies, devDependencies, themeSelectorDark, themeSelectorLight
};