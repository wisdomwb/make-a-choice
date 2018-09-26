import React, { Component } from "react"
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import Home from './pages/Home'
import Question from './pages/Question'
import AddFactor from './pages/AddFactor'
import DivideProportion from './pages/DivideProportion'
import AddOption from './pages/AddOption'
import Mark from './pages/Mark'
import Calculate from './pages/Calculate'

const newHistory = createBrowserHistory()

class Root extends Component {
  constructor(props) {
    super(props)
    let test
    // test = true
    if (test) {
      this.state = testData
    } else {
      this.state = {
        question: '',
        factors: [],
        options: [],
      }
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
    const stars = []
    this.state.factors.forEach(item => {
      stars.push({
        key: item.text,
        value: 3
      })
    })
    const temp = [...this.state.options, {
      text: option,
      stars
    }]
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

  //修改评分
  changeValue({ factor, option, value }) {
    let a = [...this.state.options]
    a.forEach(item => {
      if (item.text === option) {
        item.stars.forEach(item1 => {
          if (item1.key === factor) {
            item1.value = value
          }
        })
      }
    })
    this.setState({ options: a })
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
          <Route exact path="/mark" render={
            props => <Mark {...props} {...this.state} changeValue={this.changeValue.bind(this)} />
          } />
          <Route exact path="/calculate" render={
            props => <Calculate {...props} {...this.state}/>
          } />
        </Switch>
      </Router>
    )
  }
}


export default Root

const testData = {
  question: '',
  factors: [{
    text: 'a',
    proportion: 65
  }, {
    text: 'b',
    proportion: 31
  }, {
    text: 'c',
    proportion: 4
  }],
  options: [{
    text: 'x',
    stars: [{
      key: 'a',
      value: 3,
    }, {
      key: 'b',
      value: 5,
    }, {
      key: 'c',
      value: 5,
    }]
  }, {
    text: 'y',
    stars: [{
      key: 'a',
      value: 2,
    }, {
      key: 'b',
      value: 5,
    }, {
      key: 'c',
      value: 4,
    }]
  }]
}