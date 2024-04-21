const express = require('express')
const router = express.Router()

const adminController = require('./../../controllers/admin-controller')
const categoryController = require('./../../controllers/category-controller')

router.post('/category', categoryController.postCategories)
router.put('/category/:id', categoryController.putCategory)
router.delete('/category/:id', categoryController.deleteCategory)

module.exports = router