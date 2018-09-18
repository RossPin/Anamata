import {combineReducers} from 'redux'

import auth from './auth'
import questions from './questions'
import youngPerson from './youngPerson'

export default combineReducers({ 
    auth,
    questions,
    youngPerson
})