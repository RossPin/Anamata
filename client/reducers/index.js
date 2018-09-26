import { combineReducers } from 'redux'

import auth from './auth'
import questions from './questions'
import youngPerson from './youngPerson'
import style from './style'

export default combineReducers({
  auth,
  questions,
  youngPerson,
  style
})
