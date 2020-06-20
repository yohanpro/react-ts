import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import Calendar from './components/Calendar';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Calendar />
  </Provider>,
  document.getElementById('root')
);
