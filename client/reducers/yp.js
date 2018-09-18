const initialState = {}

export default function yp (state = initialState, action) {
    switch (action.type) {
      case 'SET_YP':
        return action.yp
      default:
        return state
    }
  }