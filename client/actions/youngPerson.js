import request from '../utils/api'

export function setYp (yp) {
  return {
    type: 'SET_YP',
    yp
  }
}

export function setDetails (details) {
  return {
    type: 'SET_DETAILS',
    details
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

export function addAlert (alert) {
  return {
    type: 'ADD_ALERT',
    alert
  }
}

export function resetYp () {
  return {
    type: 'RESET_YP'
  }
}

export function createYp (data) {
  request('post', 'yp/create', data)
    .then((response) => {
      return response.body
    })
}

export function removeYp (id) {
  request('delete', `yp/del/${id}`)
    .then(response => {
      return response.body
    })
}

export function markReviewed (id) {
  request('update', `yp/reviewed/${id}`)
    .then(response => {
      return response.body
    })
}
