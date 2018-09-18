const router = require('express').Router()
const { userExists, createUser } = require('../db/users')
const token = require('../auth/token')

router.post('/register', register, token.issue)

function register (req, res, next) {
  const { username, password } = req.body
  userExists(username)
    .then(exists => {
      if (exists) return res.status(400).send({ message: 'User exists' })
      createUser({ username, password })
        .then(() => next())
    })
    .catch(err => res.status(500).send({ message: err.message }))
}

router.post('/login', login, token.issue)

function login (req, res, next) {
  const { username } = req.body
  userExists(username)
    .then(exists => {
      if (exists) next()
      else res.status(400).send({ message: 'User does not exist' })
    })
    .catch(err => res.status(500).send({ message: err.message }))
}

module.exports = router
