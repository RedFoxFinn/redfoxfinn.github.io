
import React from 'react';
import styles from '../tools/styles';
import text from '../tools/text';

const Footer = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={styles.row()}>
    <p style={styles.footer_first()}>{text.appName()}</p>
    <p style={styles.footer_second()}>v{text.version()}</p>
  </section>;
};

export default Footer;