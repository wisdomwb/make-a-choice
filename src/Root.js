import React, { Component } from "react"
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import Home from './pages/Home'
import Question from './pages/Question'
import AddFactor from './pages/AddFactor'
import DivideProportion from './pages/DivideProportion'

const newHistory = createBrowserHistory()

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      factors: []
    }
  }
  saveQuestion(text) {
    this.setState({
      question: text
    })
  }

  addFactor(factor) {
    this.setState({
      factors: [...this.state.factors, { text: factor }]
    })
  }

  removeFactor(factor) {
    this.setState(prevState => {
      return { factors: prevState.factors.filter(item => item.text !== factor) }
    })
  }

  render() {
    return (
      <Router history={newHistory}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/question" render={
            props => <Question {...props} {...this.state} saveQuestion={this.saveQuestion.bind(this)} />
          } />
          <Route exact path="/addfactor" render={
            props => <AddFactor {...props} {...this.state} addFactor={this.addFactor.bind(this)} removeFactor={this.removeFactor.bind(this)} />
          } />
          <Route exact path="/divideproportion" component={DivideProportion} />
        </Switch>
      </Router>
    )
  }
}


export default Root