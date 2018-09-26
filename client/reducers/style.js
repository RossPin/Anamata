const initialState = 'background'

export default function style (state = initialState, action) {
  switch (action.type) {
    case 'SET_STYLE':
      return action.style
    default:
      return state
  }
}
