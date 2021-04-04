
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/text.jsx
  Description:  Component that provides text elements for the parent components
*/

import React from 'react';
import styles from '../tools/styles';
import text from '../tools/text';

const ShortText = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`}>
    <p id={`${props.id}.text`} data-testid={`${props.id}.text`}>ShortText</p>
  </section>;
};

const LongText = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`}>
    <p id={`${props.id}.text`} data-testid={`${props.id}.text`} style={{width: '6em'}}>{`LongText  LongText`}</p>
  </section>;
};

export default {ShortText, LongText};