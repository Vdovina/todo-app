import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const Application: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
  
);

render(<Application />, document.getElementById('root'));
