import React, { Component } from "react"
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import Home from './pages/Home'
import Question from './pages/Question'
import AddFactor from './pages/AddFactor'
import DivideProportion from './pages/DivideProportion'
import AddOption from './pages/AddOption'

const newHistory = createBrowserHistory()

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      factors: [{
        text: 'a',
        proportion: 50
      }, {
        text: 'b',
        proportion: 30
      }, {
        text: 'c',
        proportion: 20
      }],
      options: []
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

  //添加选项
  addOption(option) {
    const temp = [...this.state.options, { text: option }]
    this.setState({
      options: temp.map(item => item)
    })
  }

  //删除选项
  removeOption(option) {
    const temp = this.state.options.filter(item => item.text !== option)
    this.setState({
      options: temp.map(item => temp)
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
          <Route exact path="/addoption" render={
            props => <AddOption {...props} {...this.state} addOption={this.addOption.bind(this)} removeOption={this.removeOption.bind(this)} />
          } />
        </Switch>
      </Router>
    )
  }
}


export default Root