import React from  'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';

import AppContainer from './containers/app/app';

const store = configureStore();

ReactDOM.render(
  <div>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </div>, document.getElementById('app')
);
