
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
import Header from './header';
import Footer from './footer';
import Navigator from './navigator';
import idGen from '../tools/idGen';

const Root = (props) => {
  return <HashRouter id={`${props.id}`}>
    <article id={idGen(`${props.id}`, 'app')} data-testid={idGen(`${props.id}`, 'app')} style={styles.rootElement()}>
      <Header id={idGen(`${props.id}`, 'header')}/>
      <Navigator id={idGen(`${props.id}`, 'navigator')}/>
      <Switch>
        <Route exact path='/' children={<Home id={idGen(`${props.id}`, 'home')}/>}/>
        <Route path='/about' children={<About id={idGen(`${props.id}`, 'about')}/>}/>
        <Route path='/cv' children={<CV id={idGen(`${props.id}`, 'cv')}/>}/>
      </Switch>
      <Footer id={idGen(`${props.id}`, 'footer')}/>
    </article>
  </HashRouter>;
};

export default Root;