
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/text.jsx
  Description:  Component that provides text elements for the parent components
*/

import React from 'react';
import styles from '../tools/styles';
import text from '../tools/text';

/*
  Function name:      ShortText
  Function type:      React functional component
  Desctiption:        ShortText returns short text content as component for rendering
  Parameters:         ShortText takes and uses following props (parameters):
                      id | generated component id
*/

const ShortText = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`}>
    <p id={`${props.id}.content`} data-testid={`${props.id}.content`}>ShortText</p>
  </section>;
};

/*
  Function name:      LongText
  Function type:      React functional component
  Desctiption:        LongText returns longer, multiline, text content as component for rendering
  Parameters:         LongerText takes and uses following props (parameters):
                      id    | generated component id
                      texts | provided texts to render as component content
*/

const LongText = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`}>
    {props.texts.map(text => <p id={`${props.id}.content${props.texts.indexOf(text)}`}>{text}</p>)}
  </section>;
};

export default {ShortText, LongText};