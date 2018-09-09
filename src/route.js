import React from "react"
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import Home from './routes/Home'
import Question from './routes/Question'
import AddFactor from './routes/AddFactor'

const newHistory = createBrowserHistory()

export const route = (
  <Router history={newHistory}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/question" component={Question} />
      <Route exact path="/addfactor" component={AddFactor} />
    </Switch>
  </Router>
)