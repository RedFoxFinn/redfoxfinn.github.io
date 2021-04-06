
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/footer.jsx
  Description:  Component that provides footer element for the application
*/

import React from 'react';
import styles from '../tools/styles';
import text from '../tools/text';

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
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={styles.row()}>
    <p style={styles.footer_first()}>{text.appName()}</p>
    <p style={styles.footer_second()}>v{text.version()}</p>
  </section>;
};

export default Footer;