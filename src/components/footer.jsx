
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/footer.jsx
  Description:  Component that provides footer element for the application
*/

import React from 'react';
import styles from '../tools/styles';
import text from '../tools/text';
import wrapTextDev from '../tools/wrapTextDev';

/*
  Function name:      Footer
  Function type:      React functional component
  Desctiption:        Footer returns footer section of the page as component for rendering
                      Footer shows following information:
                      application name
                      application version
  Parameters:         Footer takes and uses following props (parameters):
                      id | generated component id
*/

const Footer = (props) => {
  const dateTime = new Date();
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={styles.row()}>
    <p id={`${props.id}.first`} data-testid={`${props.id}.first`} style={styles.footer_first()}>{text.appName()}</p>
    <p id={`${props.id}.second`} data-testid={`${props.id}.second`} style={styles.underlined(dateTime.getDay())}>{wrapTextDev(`v${text.version()}`)}</p>
  </section>;
};

export default Footer;