
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
    <p id={`${props.id}.content`} data-testid={`${props.id}.content`}>ShortText</p>
  </section>;
};

const LongText = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`}>
    {props.texts.map(text => <p id={`${props.id}.content${props.texts.indexOf(text)}`}>{text}</p>)}
  </section>;
};

export default {ShortText, LongText};