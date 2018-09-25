import { combineReducers } from 'redux'

import auth from './auth'
import questions from './questions'
import youngPerson from './youngPerson'
import socket from './socket'
import alerts from './alerts'

export default combineReducers({
  auth,
  questions,
  youngPerson,
  socket,
  alerts
})
