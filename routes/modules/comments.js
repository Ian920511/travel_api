const express = require('express')
const router = express.Router()

const commentController = require('../../controllers/comment-controller')

router.post('/', commentController.postComment)
router.get('/:id', commentController.getComments)

module.exports = router