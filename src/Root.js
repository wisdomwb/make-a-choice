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

  //保存问题
  saveQuestion(text) {
    this.setState({
      question: text
    })
  }

  //获取平分的比例
  getProportion(n) {
    return parseFloat((100 / n).toFixed(2))
  }

  //添加因素
  addFactor(factor) {
    const proportion = this.getProportion(this.state.factors.length + 1)
    const temp = [...this.state.factors, { text: factor, proportion }]
    this.setState({
      factors: temp.map(item => {
        item.proportion = proportion
        return item
      })
    })
  }

  //删除因素
  removeFactor(factor) {
    const proportion = this.getProportion(this.state.factors.length - 1)
    const temp = this.state.factors.filter(item => item.text !== factor)
    this.setState({
      factors: temp.map(item => {
        item.proportion = proportion
        return item
      })
    })
    /* this.setState(prevState => {
      const proportion = this.getProportion(prevState.factors.length - 1)
      const temp = prevState.factors.filter(item => item.text !== factor)
      return {
        factors: temp.map(item => {
          item.proportion = proportion
          return item
        })
      }
    }) */
  }

  //保存因素分配比例
  saveProportion(arr) {
    this.setState(prevState => {
      return {
        factors: prevState.factors.map((item, index) => {
          item.proportion = arr[index]
          return item
        })
      }
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