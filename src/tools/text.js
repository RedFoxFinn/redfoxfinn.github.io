import packageInfo from '../../package.json';

const author = () => {
  return packageInfo.author;
};

const version = () => {
  return packageInfo.version;
};

export default {
  author, version
};