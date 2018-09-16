import { combineReducers } from 'redux'
import question from './question'
import factors from './factors'

export default combineReducers({
  question,
  factors,
})

//另一种写法
/* export default function makeAChoice(state = {}, action) {
  return {
    question: question(state.question, action),
    factors: factors(state.factors, action),
  }
} */