import styles from '../tools/styles';

const checkTheme = () => {
  let theme = localStorage.getItem('rff.io.theme');
  if (theme) {
    return {
      action: 'check',
      theme: theme,
      status: 'done'
    };
  } else {
    setDark();
    theme = localStorage.getItem('rff.io.theme');
    return {
      action: 'autoSet',
      theme: theme,
      status: 'done'
    };
  }
};

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
  localStorage.setItem('rff.io.theme', 'light');
  document.getElementById('root').style.backgroundImage = styles.body('light').backgroundImage;
};

const setDark = () => {
  localStorage.setItem('rff.io.theme', 'dark');
  document.getElementById('root').style.backgroundImage = styles.body('dark').backgroundImage;
};

export default {
  checkTheme, setTheme
};