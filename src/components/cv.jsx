
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/cv.jsx
  Description:  Component that provides CV page
*/

import React, {} from 'react';
import Text from './text';
import idGen from '../tools/idGen';
import styles from '../tools/styles';

/*
  Function name:      CV
  Function type:      React functional component
  Desctiption:        CV returns cv page as component for rendering
                      CV sums up professional skills
  Parameters:         CV takes and uses following props (parameters):
                      id | generated component id
*/

const CV = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={styles.componentMaster()}>
    <Text.HeaderText id={idGen(`${props.id}`, 'headerText')} content={'CV'}/>
  </section>;
};

export default CV;