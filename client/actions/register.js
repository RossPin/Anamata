import request from 'superagent'
import { saveUserToken } from '../utils/auth'
import { receiveLogin } from './login'

export function registerUserRequest ({ username, password }) {
  global.window.localStorage.setItem('fun', 'times')
  return (dispatch) => {
    request
      .post('/api/users/register')
      .send({
        username, password
      })
      .end((err, res) => {
        if (err) {
          window.alert("didn't work")
          console.log({ err })
        } else {
          const userInfo = saveUserToken(res.body.token)
          dispatch(receiveLogin(userInfo))
          document.location = '/'
        }
      })
  }
}
