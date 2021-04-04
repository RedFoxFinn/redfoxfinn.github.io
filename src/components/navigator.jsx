
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/navigator.jsx
  Description:  Component that provides navigational links for app
*/

import React, {} from 'react';
import { Link } from 'react-router-dom';
import language from '../tools/language';
import styles from '../tools/styles';
import text from '../tools/text';
import idGen from '../tools/idGen';

const Navigator = (props) => {
  const lang = language.checkLang();
  const navHomeId = idGen(`${props.id}`, 'navHome');
  const navAboutId = idGen(`${props.id}`, 'navAbout');
  const navCvId = idGen(`${props.id}`, 'navCV');
  const navLinksId = idGen(`${props.id}`, 'navLinks');
  return <nav id={`${props.id}`} data-testid={`${props.id}`} style={styles.row()}>
    <Link id={navHomeId} data-testid={navHomeId} style={{marginLeft: '1em', marginRight: '1em'}} to='/'>{text.navHome(lang)}</Link>
    <Link id={navCvId} data-testid={navCvId} style={{marginLeft: '1em', marginRight: '1em'}} to='/cv'>{text.navCV(lang)}</Link>
    <Link id={navAboutId} data-testid={navAboutId} style={{marginLeft: '1em', marginRight: '1em'}} to='/about'>{text.navAbout(lang)}</Link>
  </nav>;
};

export default Navigator;