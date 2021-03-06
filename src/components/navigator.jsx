
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

/*
  Function name:      Navigator
  Function type:      React functional component
  Desctiption:        Navigator returns page navigation as component for rendering
                      Navigator is applications navigational components
  Parameters:         Navigator takes and uses following props (parameters):
                      id | generated component id
*/

const Navigator = (props) => {
  const lang = language.checkLang();
  const navHomeId = idGen(`${props.id}`, 'navHome');
  const navAboutId = idGen(`${props.id}`, 'navAbout');
  const navCvId = idGen(`${props.id}`, 'navCV');
  const navLinksId = idGen(`${props.id}`, 'navLinks');
  return <nav id={`${props.id}`} data-testid={`${props.id}`} style={styles.navigation()}>
    <Link id={navHomeId} data-testid={navHomeId} style={{marginLeft: '1em', marginRight: '1em'}} to='/'>{text.navHome(lang)}</Link>
    <Link id={navCvId} data-testid={navCvId} style={{marginLeft: '1em', marginRight: '1em'}} to='/cv'>{text.navCV(lang)}</Link>
    <Link id={navLinksId} data-testid={navLinksId} style={{marginLeft: '1em', marginRight: '1em'}} to='/links'>{text.navLinks(lang)}</Link>
    <Link id={navAboutId} data-testid={navAboutId} style={{marginLeft: '1em', marginRight: '1em'}} to='/about'>{text.navAbout(lang)}</Link>
  </nav>;
};

export default Navigator;