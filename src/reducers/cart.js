import { combineReducers } from "redux"
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      let newstate = state
      newstate.push(action.item)
      return newstate
    default:
      return state
  }

}

const allReducers = combineReducers({
  cart: cartReducer
})

export default allReducers