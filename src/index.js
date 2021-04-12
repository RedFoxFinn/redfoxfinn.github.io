import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Root from './components/root';
import text from './tools/text';
import Store from './controllers/state';

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Root id={`${text.appId()}`}/>
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
