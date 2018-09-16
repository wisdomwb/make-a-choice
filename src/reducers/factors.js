import { ADD_FACTOR, REDUCE_FACTOR } from '../actions'
const initialState = []
const factors = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FACTOR:
      return [...state, { key: action.text }]
    case REDUCE_FACTOR:
      return state.filter(item => item.text !== action.text)
    default:
      return state
  }
}

export default factors