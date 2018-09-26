const initialState = { answers: {} }

export default function youngPerson (state = initialState, action) {
  switch (action.type) {
    case 'SET_YP':
      return action.yp
    case 'SET_DETAILS':
      return Object.assign(state, { details: action.details })
    case 'ADD_CONSENT':
      return Object.assign(state, { consent: action.consent, timestamp: action.timestamp })
    case 'ADD_SECTION':
      state.answers[action.title] = action.answers
      return Object.assign({}, state)
    case 'ADD_ALERT':
      const alerts = state.alerts || []
      alerts.push(action.alert)
      return Object.assign(state, { alerts })
    case 'RESET_YP':
      return { answers: {} }
    default:
      return state
  }
}
