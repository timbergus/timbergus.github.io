const INCREMENT = 'my-app/counter/INCREMENT'
const DECREMENT = 'my-app/counter/DECREMENT'

export function incrementCounter () {
  return { type: INCREMENT }
}

export function decrementCounter () {
  return { type: DECREMENT }
}

export default function reducer (state = {}, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign(state, { message: INCREMENT })
    case DECREMENT:
      return Object.assign(state, { message: DECREMENT })
    default:
      return state
  }
};
