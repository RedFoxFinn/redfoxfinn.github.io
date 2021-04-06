/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/links.jsx
  Description:  Component that provides lik list page for the application
*/

import React from 'react';
import Text from './text';
import idGen from '../tools/idGen';

/*
  Function name:      Links
  Function type:      React functional component
  Desctiption:        Links returns links page as component for rendering
                      Links is a list of links to code repositories and live projects
  Parameters:         Links takes and uses following props (parameters):
                      id | generated component id
*/

const Links = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={{margin: '1em'}}>
    <Text.HeaderText id={idGen(`${props.id}`, 'headerText')} content={'Link list'}/>
  </section>
};

export default Links;