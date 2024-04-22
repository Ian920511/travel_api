const express = require('express')
const router = express.Router()

const adminController = require('./../../controllers/admin-controller')
const categoryController = require('./../../controllers/category-controller')
const viewpointController = require('./../../controllers/viewpoint-controller')
const commentController = require('./../../controllers/comment-controller')

router.post('/category', categoryController.postCategories)
router.put('/category/:id', categoryController.putCategory)
router.delete('/category/:id', categoryController.deleteCategory)
router.post('/viewpoint', viewpointController.postViewpoints)
router.put('/viewpoint/:id', viewpointController.putViewpoint)
router.delete('/viewpoint/:id', viewpointController.deleteViewpoint)
router.delete('/comment/:id', commentController.deleteComment)


module.exports = router