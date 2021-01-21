
import React, {} from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom';
import styles from '../tools/styles';
import Home from './home';
import About from './about';
import Header from './header';

const Root = (props) => <HashRouter>
  <div style={styles.column()}>
    <Header/>
    <nav style={styles.row()}>
      <Link style={{marginLeft: '1em', marginRight: '1em'}} to='/'>Home</Link>
      <Link style={{marginLeft: '1em', marginRight: '1em'}} to='/about'>About</Link>
    </nav>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
  </div>
</HashRouter>;

export default connect()(Root);