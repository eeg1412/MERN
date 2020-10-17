import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/data'
import App from './view/App'
import register from './view/register'

import './assets/css/style.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App}></Route>
      <Route path="/register" component={register}></Route>
    </Router>
  </Provider>,
  document.querySelector("#root")
)