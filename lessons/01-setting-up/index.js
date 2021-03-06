import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'


import { Router, Route, browserHistory } from 'react-router'

import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/repos" component={Repos}/>
    <Route path="/repos/:userName/:repoName" component={Repo}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))
