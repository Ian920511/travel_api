const express = require('express')
const router = express.Router()

const users = require('./modules/users')
const categories = require('./modules/categories')

router.use('/users', users)
router.use('/category', categories)

module.exports = router
