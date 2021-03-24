
import React from 'react';
import styles from '../tools/styles';
import text from '../tools/text';

const Footer = (props) => {
  return <section style={styles.row()}>
    <p style={styles.header_first()}>{text.version()}</p>
  </section>;
};

export default Footer;