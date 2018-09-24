const initialState = []

export default function questions (state = initialState, action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return action.questions
    default:
      return state
  }
}
