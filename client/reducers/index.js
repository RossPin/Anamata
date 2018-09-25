import { combineReducers } from 'redux'

import auth from './auth'
import questions from './questions'
import youngPerson from './youngPerson'
import socket from './socket'

export default combineReducers({
  auth,
  questions,
  youngPerson,
  socket
})
