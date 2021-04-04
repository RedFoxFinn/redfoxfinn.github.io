
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/navigator.jsx
  Description:  Component that provides front page of the application
*/

import React, {} from 'react';

import Text from './text';

const Home = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={{margin: '1em'}}>
    HOME!
    <Text.ShortText/>
    <Text.LongText/>
  </section>;
}

export default Home;