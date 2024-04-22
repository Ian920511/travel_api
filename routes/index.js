const express = require('express')
const router = express.Router()

const { authenticated, authenticatedAdmin } = require('../middleware/auth')
const users = require('./modules/users')
const categories = require('./modules/categories')
const admin = require('./modules/admin')
const viewpoints = require('./modules/viewpoints')
const comments = require('./modules/comments')

router.use('/users', users)
router.use('/categories', categories)
router.use('/viewpoints', viewpoints)
router.use('/admin', authenticated, admin)
router.use('/comments', authenticated, comments)

module.exports = router
