/* eslint-disable import/no-anonymous-default-export */

/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/text.jsx
  Description:  Component that provides text elements for the parent components
*/

import React from 'react';
import styles from '../tools/styles';

/*
  Function name:      ShortText
  Function type:      React functional component
  Desctiption:        ShortText returns short text content as component for rendering
  Parameters:         ShortText takes and uses following props (parameters):
                      id        | generated component id
                      content   | text content to render
*/

const ShortText = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`}>
    <p id={`${props.id}.content`} data-testid={`${props.id}.content`} style={styles.textM()}>{props.content}</p>
  </section>;
};

/*
  Function name:      LongText
  Function type:      React functional component
  Desctiption:        LongText returns longer, multiline, text content as component for rendering
  Parameters:         LongerText takes and uses following props (parameters):
                      id        | generated component id
                      content   | text content to render
*/

const LongText = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`}>
    <p id={`${props.id}.content`} data-testid={`${props.id}.content`} style={styles.textM()}>{props.content}</p>
  </section>;
};

/*
  Function name:      HeaderText
  Function type:      React functional component
  Desctiption:        HeaderText returns short text content as component for rendering
  Parameters:         HeaderText takes and uses following props (parameters):
                      id        | generated component id
                      content   | text content to render
*/

const HeaderText = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`}>
    <p id={`${props.id}.content`} data-testid={`${props.id}.content`} style={styles.textL()}>{props.content}</p>
  </section>;
};

const DetailText = (props) => {
  const generateDetailsId = () => `${props.id}.details`;
  const generateSummaryId = () => `${props.id}.details.summary`;
  const generateDetailsContentId = (index) => `${props.id}.details.content.${index}`;
  return <section id={`${props.id}`} data-testid={`${props.id}`}>
    <details id={generateDetailsId()}>
      <summary
        id={generateSummaryId()}
        style={props.overrideSummaryStyle ? props.style : styles.textM()}>{props.content.name}</summary>
      {props.content.with.map(ext => <p
        id={generateDetailsContentId(props.content.with.indexOf(ext))}
        key={generateDetailsContentId(props.content.with.indexOf(ext))}
        style={props.overrideDetailStyle ? props.style : styles.textM()}>
          {ext.name}
        </p>)}
    </details>
  </section>;
};

export default {ShortText, LongText, HeaderText, DetailText};