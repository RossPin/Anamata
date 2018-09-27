
export default function newSubmission (state = false, action) {
  switch (action.type) {
    case 'NEW_SUBMIT':
      return true
    case 'RESET_SUBMIT':
      return false
    default:
      return state
  }
}