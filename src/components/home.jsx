
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/navigator.jsx
  Description:  Component that provides front page of the application
*/

import React, {} from 'react';

import Text from './text';
import idGen from '../tools/idGen';

/*
  Function name:      Home
  Function type:      React functional component
  Desctiption:        Home returns home page as component for rendering
  Parameters:         Home takes and uses following props (parameters):
                      id | generated component id
*/

const Home = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={{margin: '1em'}}>
    HOME!
    <Text.ShortText id={idGen(props.id, 'shortText', 1)}/>
    <Text.LongText id={idGen(props.id, 'longText', 2)} texts={['1','2','3']}/>
  </section>;
}

export default Home;