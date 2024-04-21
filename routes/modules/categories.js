const express = require('express')
const router = express.Router()

const categoryController = require('../../controllers/category-controller')

router.get('/', categoryController.getCategories)
router.post('/categories', categoryController.postCategories)

module.exports = router