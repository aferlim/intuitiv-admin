import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Switch } from 'react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor, history } from '../config/store'
import { default as Shell } from '../config/Shell'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Shell />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

export default App
