import styles from '../tools/styles';

const setTheme = (theme) => {
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
};

const setLight = () => {
  document.getElementById('root').style.backgroundImage = styles.body('light').backgroundImage;
};

const setDark = () => {
  document.getElementById('root').style.backgroundImage = styles.body('dark').backgroundImage;
};

export default setTheme;