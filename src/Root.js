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
      factors: [{
        text: 'a',
        proportion: 33.3
      }, {
        text: 'b',
        proportion: 33.3
      }, {
        text: 'c',
        proportion: 33.3
      }]
    }
  }

  //保存问题
  saveQuestion(text) {
    this.setState({
      question: text
    })
  }

  //添加因素
  addFactor(factor) {
    this.setState({
      factors: [...this.state.factors, { text: factor }]
    })
  }

  //删除因素
  removeFactor(factor) {
    this.setState(prevState => {
      return { factors: prevState.factors.filter(item => item.text !== factor) }
    })
  }

  //保存因素分配比例
  saveProportion(arr) {
    this.setState(prevState => {
      console.log()
      return { factors: prevState.factors.map((item, index) => item.proportion = arr[index]) }
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
          <Route exact path="/divideproportion" render={
            props => <DivideProportion {...props} {...this.state} saveProportion={this.saveProportion.bind(this)} />
          } />
        </Switch>
      </Router>
    )
  }
}


export default Root