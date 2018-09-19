import React from "react"
import ReactDOM from 'react-dom'
import Root from './Root'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)


let state0 = {
  question: '',//问题
  factors: [{
    text: 'a',
    proportion: '30%',
  }, {
    text: 'b',
    proportion: '70%',
  }],//影响因素
  options: [{
    text: 'x',
    stars: [{
      key: 'a',
      value: 3,
    }, {
      key: 'b',
      value: 5,
    }]
  }, {
    text: 'y',
    stars: [{
      key: 'a',
      value: 4,
    }, {
      key: 'b',
      value: 3,
    }]
  }],//待选项
  conclusion: ''//结论
}

/* let state1 = {
  factors: {
    byId: {
      a: {
        id: 'a',
        name: 'a012',
        proportion: '30%',
      },
      b: {
        id: 'b',
        name: 'b012',
        proportion: '70%',
      }
    },
    allIds: ['a', 'b']
  },
  options: {
    byId: {
      x: {
        id: 'x',
        name: 'x012',
      },
      y: {
        id: 'y',
        name: 'y012'
      }
    },
    allIds: ['x', 'y']
  }
} */