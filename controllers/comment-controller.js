const { Comment, User, Viewpoint } = require('../models')
const createError = require('http-errors')

const commentController = {
  postComment: async (req, res, next) => {
    try {
      const { viewpointId, text } = req.body
      const userId = req.user.id

      if (!text) throw new createError(400, 'Comment text is required')

      const user = await User.findByPk(userId)
      if (!user) throw new createError(404, "User didn't exist")

      const viewpoint = await Viewpoint.findByPk(viewpointId)
      if (!viewpoint) throw new createError(404, "Viewpoint didn't exist")

      const comment = await Comment.create({
        text,
        viewpointId,
        userId
      })

      res.json({
        status: 'success',
        data: { comment }
      })

    } catch (error) {
      next (error)
    }
  },

  getComments: async (req, res, next) => {
    try {
      const viewpointId = req.params.id

      const comments = await Comment.findAll({ where : { viewpointId }})
      
      res.json({
        status: 'success',
        data: { comments }
      })


    } catch (error) {
      next (error)
    }
  },

  deleteComment: async (req, res, next) => {
    try {
      const id = req.params.id

      const comment = await Comment.findByPk(id)
      if (!comment) throw new createError(404, "Comment didn't exist")

      await Comment.destroy({ where: { id }})

      res.json({
        status: 'success',
        data: { comment }
      })


    } catch (error) {
      next (error)
    }
  }

}

module.exports = commentController