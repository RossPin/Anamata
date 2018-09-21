import request from '../utils/api'

export function setYp (yp) {
  return {
    type: 'SET_YP',
    yp
  }
}

export function addConsent (consent, timestamp) {
  return {
    type: 'ADD_CONSENT',
    consent,
    timestamp
  }
}

export function addSection (title, answers) {
  return {
    type: 'ADD_SECTION',
    title,
    answers
  }
}

export function resetYp () {
  return {
    type: 'RESET_YP'
  }
}

export function createYp (data) {
  return dispatch => {
    return request('post', 'yp/create', data)
      .then((response) => {
        dispatch(setYp(response.body))
      })
  }
}
