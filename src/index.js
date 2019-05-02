import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import configureStore from './store/configureStore';
import Routes from './routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas }  from '@fortawesome/free-solid-svg-icons';
import { far }  from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

const store = configureStore();
export const renderApp = () => {
  const App = props => {
    return(
      <Provider store={store}>
        <Router>
          {Routes}
        </Router>
      </Provider>
    );
  };

  render(
    <App />,
    document.getElementById('root'),
  );
};
renderApp();
