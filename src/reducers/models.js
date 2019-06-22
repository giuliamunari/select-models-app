import { ADD_MODEL } from '../actions/addModel'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MODEL:
      const condition = state.find(element => element.name === action.payload.name)
      if (!condition) {
        return [...state, action.payload]
      }
      return state
    default:
      return state
  }
}