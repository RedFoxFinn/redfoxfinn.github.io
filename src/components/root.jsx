
import React, {} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import styles from '../tools/styles';
import Home from './home';
import About from './about';
import Header from './header';
import Navigator from './navigator';

const Root = (props) => {
  return <HashRouter>
    <article style={styles.rootElement()}>
      <Header/>
      <Navigator/>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </article>
  </HashRouter>;
};

export default Root;