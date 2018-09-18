import {combineReducers} from 'redux'

import auth from './auth'
import questions from './questions'
import yp from './yp'

export default combineReducers({ 
    auth,
    questions,
    yp
})