const router = require('express').Router()
var token = require('../auth/token')
const { createYp, addResponse, getYp, getCurrent, removeYp, getReviewed, markReviewed } = require('../db/youngPeople')

router.post('/create', (req, res) => {
  const { details, consent, timestamp, answers, alerts } = req.body
  createYp(details, consent, timestamp, answers, alerts).then(yp => {
    res.json(yp)
  })
    .catch(err => res.status(500).send({ message: err.message }))
})

router.post('/response', (req, res) => {
  const { id, response } = req.body
  addResponse(id, response).then(
    res.status(200).send({ message: 'response added' })
  )
    .catch(err => res.status(500).send({ message: err.message }))
})

router.delete('/del/:id', token.decode, (req, res) => {
  const id = req.params.id
  removeYp(id).then(() => {
    res.json({ message: `young person removed` })
  })
    .catch(err => res.status(500).send({ message: err.message }))
})

router.delete('/reviewed/:id', token.decode, (req, res) => {
  const id = req.params.id
  markReviewed(id).then(() => {
    res.json({ message: `young person reviewed` })
  })
    .catch(err => res.status(500).send({ message: err.message }))
})

router.get('/view/current', token.decode, (req, res) => {
  getCurrent().then(current => {
    res.json(current)
  })
    .catch(err => res.status(500).send({ message: err.message }))
})

router.get('/view/reviewed', token.decode, (req, res) => {
  getReviewed().then(reviewed => {
    res.json(reviewed)
  })
    .catch(err => res.status(500).send({ message: err.message }))
})

router.get('/view/:id', token.decode, (req, res) => {
  const id = req.params.id
  getYp(id).then(yp => {
    res.json(yp)
  })
    .catch(err => res.status(500).send({ message: err.message }))
})

module.exports = router
