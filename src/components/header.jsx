
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/header.jsx
  Description:  Component that provides header element for the application
*/

import React from 'react';
import styles from '../tools/styles';
import text from '../tools/text';
import wrapTextDev from '../tools/wrapTextDev';

/*
  Function name:      Header
  Function type:      React functional component
  Desctiption:        Header returns header section of the page as component for rendering
                      Header shows headline of the application, which is online nickname in my case
  Parameters:         Header takes and uses following props (parameters):
                      id | generated component id
*/

const Header = (props) => {
  const generateContentId = () => `${props.id}.content`;
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={styles.row()}>
    <p style={styles.header_first()} id={generateContentId()} data-testid={generateContentId()}>{wrapTextDev(text.author())}</p>
  </section>;
};

export default Header;