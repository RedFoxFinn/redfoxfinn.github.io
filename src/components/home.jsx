
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