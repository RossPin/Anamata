const initialState = []

export default function alerts (state = initialState, action) {
  switch (action.type) {
    case 'ADD_ALERT':
      return [ ...state, action.alert ]
    case 'RESET_ALERTS':
      return []
    default:
      return state
  }
}
