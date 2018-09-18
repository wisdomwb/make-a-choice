import React from "react"
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import Home from './Home'
import Question from '../containers/Question'
import AddFactor from '../containers/AddFactor'
import DivideProportion from '../containers/DivideProportion'

const newHistory = createBrowserHistory()

export const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={newHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/addfactor" component={AddFactor} />
        <Route exact path="/divideproportion" component={DivideProportion} />
      </Switch>
    </Router>
  </Provider>
)