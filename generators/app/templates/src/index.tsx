import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '~src/store';
import { App } from '~src/components';
import { ErrorBoundary } from '~src/boundaries';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
