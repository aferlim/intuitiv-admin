import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch } from 'react-router'

import { store, history } from '../config/store'
import { default as Shell } from '../config/Shell'

const App = () => (
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Shell />
        </Switch>
      </ConnectedRouter>
  </Provider>
)

export default App
