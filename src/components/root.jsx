
/*
  Author:       RedFoxFinn - Antti Aarnio
  Project:      RedFoxFinn.github.io
  File:         ./src/components/root.jsx
  Description:  Root component for app
*/

import React, {} from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styles from '../tools/styles';
import Home from './home';
import About from './about';
import CV from './cv';
import Links from './links';
import Header from './header';
import Footer from './footer';
import Navigator from './navigator';
import idGen from '../tools/idGen';

/*
  Function name:      Root
  Function type:      React functional component
  Desctiption:        Root returns applications root component for rendering
                      Root is the first component of the application 
                      Root uses React router for routing between different views
  Parameters:         Links takes and uses following props (parameters):
                      id | generated component id
*/

const Root = (props) => {
  return <HashRouter id={`${props.id}`}>
    <article id={idGen(`${props.id}`, 'app')} data-testid={idGen(`${props.id}`, 'app')} style={styles.rootElement()}>
      <Header id={idGen(`${props.id}`, 'header')}/>
      <Navigator id={idGen(`${props.id}`, 'navigator')}/>
      <Switch>
        <Route exact path='/' children={<Home id={idGen(`${props.id}`, 'home')}/>}/>
        <Route path='/about' children={<About id={idGen(`${props.id}`, 'about')}/>}/>
        <Route path='/cv' children={<CV id={idGen(`${props.id}`, 'cv')}/>}/>
        <Route path='/links' children={<Links id={idGen(`${props.id}`, 'links')}/>}/>
      </Switch>
      <Footer id={idGen(`${props.id}`, 'footer')}/>
    </article>
  </HashRouter>;
};

export default Root;