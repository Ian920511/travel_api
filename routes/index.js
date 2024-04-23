const express = require('express')
const router = express.Router()

const { authenticated, authenticatedAdmin } = require('../middleware/auth')
const users = require('./modules/users')
const categories = require('./modules/categories')
const admin = require('./modules/admin')
const viewpoints = require('./modules/viewpoints')
const comments = require('./modules/comments')
const favorites = require('./modules/favorites')

router.use('/users', users)
router.use('/categories', categories)
router.use('/viewpoints', viewpoints)
router.use('/admin', authenticated, authenticatedAdmin, admin)
router.use('/comments', authenticated, comments)
router.use('/favorites', authenticated, favorites)

module.exports = router
