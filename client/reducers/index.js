import { combineReducers } from 'redux'

import auth from './auth'
import youngPerson from './youngPerson'
import style from './style'
import alerts from './alerts'

export default combineReducers({
  auth,  
  youngPerson,
  style,
  alerts
})
