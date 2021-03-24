import React, {} from 'react';
import { Link } from 'react-router-dom';
import language from '../tools/language';
import styles from '../tools/styles';

const Navigator = () => {
  const lang = language.checkLang();
  return <nav style={styles.row()}>
    <Link style={{marginLeft: '1em', marginRight: '1em'}} to='/'>{lang === 'fi' ? 'Etusivu' : 'Home'}</Link>
    <Link style={{marginLeft: '1em', marginRight: '1em'}} to='/about'>{lang === 'fi' ? 'Sivusta' : 'About'}</Link>
  </nav>;
};

export default Navigator;