const initialState = {}

export default function youngPerson (state = initialState, action) {
    switch (action.type) {
      case 'SET_YP':
        return action.yp
      default:
        return state
    }
  }