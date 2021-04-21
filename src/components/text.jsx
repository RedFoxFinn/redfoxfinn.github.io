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
    <p id={`${props.id}.content`} data-testid={`${props.id}.content`}
      style={props.altStyle ? styles.textL() : styles.textM()}>{props.content}</p>
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
    <p id={`${props.id}.content`} data-testid={`${props.id}.content`}
      style={props.altStyle ? styles.textL() : styles.textM()}>{props.content}</p>
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
    <p
      id={`${props.id}.content`}
      data-testid={`${props.id}.content`}
      style={props.altStyle ? styles.textXL() : styles.textL()}>
        {props.content}
    </p>
  </section>;
};

/*
  Function name:      DetailText
  Function type:      React functional component
  Desctiption:        DetailText returns text content wrapped inside of <details>
                      as a component for rendering
  Parameters:         DetailText takes and uses following props (parameters):
                      id        | generated component id
                      content   | text content to render
                      altSummaryStyle
                      altDetailStyle
*/

const DetailText = (props) => {
  const generateSummaryId = () => `${props.id}.details.summary`;
  const generateDetailsContentId = (index) => `${props.id}.details.content.${index}`;
  return <details id={`${props.id}`} data-testid={`${props.id}`} style={styles.detailsSectionM()}>
    <summary id={generateSummaryId()} data-testid={generateSummaryId()}
      style={props.altSummaryStyle ? styles.textL() : styles.textM()}>
        {props.content.name}</summary>
    {props.content.with.map(ext => <p
      id={generateDetailsContentId(props.content.with.indexOf(ext))}
      data-testid={generateDetailsContentId(props.content.with.indexOf(ext))}
      key={generateDetailsContentId(props.content.with.indexOf(ext))}
      style={props.altDetailStyle ? styles.textL() : styles.textM()}>
        {ext.name}
      </p>)}
  </details>;
};

/*
  Function name:      PackageText
  Function type:      React functional component
  Desctiption:        PackageText returns text content wrapped inside of <details>
                      as a component for rendering
  Parameters:         PackageText takes and uses following props (parameters):
                      id        | generated component id
                      content   | text content to render
                      altStyle  | 
                      dev       | boolean, effect on style
*/

const PackageText = (props) => {
  const generateSummaryId = () => `${props.id}.details.summary`;
  const generateDetailsContentId = (index) => `${props.id}.details.content.${index}`;
  return <details id={`${props.id}`} data-testid={`${props.id}`} style={styles.detailsSectionM()}>
    <summary id={generateSummaryId()} data-testid={generateSummaryId()}
      ><p style={props.altSummaryStyle ? styles.textL() : styles.textM()}>{props.packageTypes}</p></summary>
    {props.packages.map(dep => {
      const id = generateDetailsContentId(props.packages.indexOf(dep));
      return <p id={id} data-testid={id} key={id}
        style={props.altDetailStyle ? styles.textL() : styles.textM()}>
        {`${dep[0]}: ${dep[1]}`}
      </p>
    })}
  </details>;
};

export default {ShortText, LongText, HeaderText, DetailText, PackageText};