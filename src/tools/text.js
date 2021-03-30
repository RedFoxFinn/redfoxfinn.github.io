import packageInfo from '../../package.json';
import content from '../data/text.json';

const author = () => {
  return packageInfo.author;
};

const version = () => {
  return packageInfo.version;
};

const home = (lang) => {
  return lang === 'fi' ? content.home.fi.toString() : content.home.en.toString();
};

const navHome = (lang) => {
  return lang === 'fi' ? content.navigation[0].fi.toString() : content.navigation[0].en.toString();
};

const navAbout = (lang) => {
  return lang === 'fi' ? content.navigation[3].fi.toString() : content.navigation[3].en.toString();
};

const navCV = (lang) => {
  return lang === 'fi' ? content.navigation[1].fi.toString() : content.navigation[1].en.toString();
};

const navLinks = (lang) => {
  return lang === 'fi' ? content.navigation[2].fi.toString() : content.navigation[2].en.toString();
};

export default {
  author, version,
  home,
  navHome, navAbout, navCV, navLinks
};