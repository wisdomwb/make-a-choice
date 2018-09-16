import React from "react"
import ReactDOM from 'react-dom'
import { Root } from './components/Root'
import makeAChoice from './reducers/index'
import { createStore } from 'redux'

let store = createStore(makeAChoice)
ReactDOM.render(
  <Root store={store}></Root>,
  document.getElementById('root')
)


/* let state = {
  question: '',//问题
  factors: [{
    key: '',
    proportion: 0,
  }],//影响因素
  options: [{
    key: '',
    stars: {

    }
  }],//待选项
  conclusion: ''//结论
} */