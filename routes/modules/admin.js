const express = require('express')
const router = express.Router()

const adminController = require('./../../controllers/admin-controller')
const categoryController = require('./../../controllers/category-controller')
const viewpointController = require('./../../controllers/viewpoint-controller')

router.post('/category', categoryController.postCategories)
router.put('/category/:id', categoryController.putCategory)
router.delete('/category/:id', categoryController.deleteCategory)
router.post('/viewpoint', viewpointController.postViewpoints)

module.exports = router