import { combineReducers } from 'redux'

import auth from './auth'
import youngPerson from './youngPerson'
import style from './style'
import alerts from './alerts'
import newSubmission from './newSubmission'

export default combineReducers({
  auth,
  youngPerson,
  style,
  alerts,
  newSubmission
})
