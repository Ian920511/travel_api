const express = require('express')
const router = express.Router()

const adminController = require('./../../controllers/admin-controller')
const categoryController = require('./../../controllers/category-controller')
const viewpointController = require('./../../controllers/viewpoint-controller')
const commentController = require('./../../controllers/comment-controller')

router.post('/categories', categoryController.postCategories)
router.put('/categories/:id', categoryController.putCategory)
router.delete('/categories/:id', categoryController.deleteCategory)
router.post('/viewpoints', viewpointController.postViewpoints)
router.put('/viewpoints/:id', viewpointController.putViewpoint)
router.delete('/viewpoints/:id', viewpointController.deleteViewpoint)
router.delete('/comments/:id', commentController.deleteComment)


module.exports = router