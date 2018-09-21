const initialState = { answers: {} }

export default function youngPerson (state = initialState, action) {
  switch (action.type) {
    case 'SET_YP':
      return Object.assign(state, action.yp)
    case 'ADD_CONSENT':
      return Object.assign(state, { consent: action.consent, timestamp: action.timestamp })
    case 'ADD_SECTION':
      state.answers[action.title] = action.answers
      return Object.assign({}, state)
    case 'RESET_YP':
      return { answers: {} }
    default:
      return state
  }
}
