const express = require('express')
const router = express.Router()

const { authenticated, authenticatedAdmin } = require('../middleware/auth')
const users = require('./modules/users')
const categories = require('./modules/categories')
const admin = require('./modules/admin')

router.use('/users', users)
router.use('/categories', categories)
router.use('/admin', authenticated, admin)

module.exports = router
