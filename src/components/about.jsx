
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/about.jsx
  Description:  Component that provides app information page
*/

import React, {} from 'react';

/*
  Function name:      About
  Function type:      React functional component
  Desctiption:        About returns about page as component for rendering
                      About is a info page of the application
  Parameters:         About takes and uses following props (parameters):
                      id | generated component id
*/

const About = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={{margin: '1em'}}>
    ABOUT?
  </section>;
};

export default About;