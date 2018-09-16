import { SAVE_QUESTION } from '../actions'
const question = (state = '', action) => {
  switch (action.type) {
    case SAVE_QUESTION: return action.question
    default: return state
  }
}

export default question