import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  name: 'Num:'
}

export default function counter (state = INITIAL_STATE, action) {
  let number = 0;
  switch (action.type) {
    case ADD:
      number = state.num + action.payload;
      return {
        ...state,
        num: number
      }
     case MINUS:
        number = state.num - 1;
       return {
         ...state,
         num: number
       }
     default:
       return state
  }
}
