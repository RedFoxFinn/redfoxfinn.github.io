
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/navigator.jsx
  Description:  Component that provides front page of the application
*/

import React, { Fragment } from 'react';

import Text from './text';
import idGen from '../tools/idGen';
import text from '../tools/text';
import language from '../tools/language';

/*
  Function name:      generateTextContent
  Function type:      arrow function / helper
  Description:        generateTextContent returns home page text content
                      wrapped inside React Fragment
                      Fragment is a component which won't be rendered or 
                      doesn't show on 
  Parameters:         lang  | language selection
                      id    | parent component id
*/

const generateTextContent = (id) => {
  const lang = language.checkLang();
  const texts = text.home(lang);
  return <Fragment>
    {texts.map(content => {
      let genId;
      content.length >= 36
        ? genId = idGen(`${id}`,'longText',texts.indexOf(content))
        : genId = idGen(`${id}`,'shortText',texts.indexOf(content));

      return content.length >= 36
        ? <Text.LongText id={genId} key={genId} content={content}/>
        : <Text.ShortText id={genId} key={genId} content={content}/>;
    })}
  </Fragment>
};

/*
  Function name:      Home
  Function type:      React functional component
  Desctiption:        Home returns home page as component for rendering
  Parameters:         Home takes and uses following props (parameters):
                      id    | generated component id
*/

const Home = (props) => {
  return <section id={`${props.id}`} data-testid={`${props.id}`} style={{margin: '1em'}}>
    {generateTextContent(props.id)}
  </section>;
}

export default Home;