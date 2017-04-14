'use strict'

const {Router} = require('express')
const router = Router()

router.get('/', function (req, res, next) {
  const title = 'Express'
  req.log.info(`rendering index view with ${title}`)
  res.render('index', {title: 'Express'})
  next()
})

module.exports = router
