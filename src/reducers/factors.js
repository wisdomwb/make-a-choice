import { ADD_FACTOR, REDUCE_FACTOR } from '../actions'
const initialState = [{ text: 'abc' }, { text: 'edf' }]
const factors = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FACTOR:
      return [...state, { text: action.text }]
    case REDUCE_FACTOR:
      return state.filter(item => item.text !== action.text)
    default:
      return state
  }
}

export default factors