import { ADD_MODEL } from '../actions/addModel'

export default (state = [], action = {}) => {
  const condition = state.find(element=> {
    return element.name === action.payload.name
  })  
  switch (action.type) {
    case ADD_MODEL:
      if (!condition){
        return [...state, action.payload]
      }
      return state
    default:
      return state
  }
}