import React from "react"
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import Home from './Home'
import Question from '../containers/Question'
import AddFactor from '../containers/AddFactor'

const newHistory = createBrowserHistory()

export const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={newHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/addfactor" component={AddFactor} />
      </Switch>
    </Router>
  </Provider>
)