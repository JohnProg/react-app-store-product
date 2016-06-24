// App client
import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main';
import Single from './components/Single'
import Results from './components/Results'

import { Router, browserHistory } from 'react-router';

// Routes
import routes from './routes'

// Import CSS
import css from  './css/style.styl';

const Routes = (
  <Router history={browserHistory}>
    { routes }
  </Router>
)

const app = document.getElementById('root')
render(Routes, app)