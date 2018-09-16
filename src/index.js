import React from "react"
import ReactDOM from 'react-dom'
import { route } from './route'
import makeAChoice from './reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let store = createStore(makeAChoice)
ReactDOM.render(
  <Provider store={store}>
    route
  </Provider>,
  document.getElementById('root'))


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