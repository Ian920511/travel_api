const { Favorite, Viewpoint} = require('./../models')
const createError = require('http-errors')

const favoriteController = {
  addFavorite: async (req, res, next) => {
    try {
      const viewpointId = req.params.id
      
      const viewpoint = await Viewpoint.findByPk(viewpointId)
      if (!viewpoint) throw new createError(404, "Viewpoint didn't exist")

      const checkFavorite = await Favorite.findOne({ where: { userId: req.user.id, viewpointId }})
      if (checkFavorite) throw new createError(409, 'You have favorited this viewpoint')

      const favorite = await Favorite.create({ userId: req.user.id, viewpointId })

      res.json({
        status: 'success',
        data: { favorite }
      })

    } catch (error) {
      next (error)
    }
  },

  removeFavorite: async (req, res, next) => {
    try {
      const favorite = await Favorite.findOne({ where: { userId: req.user.id, viewpointId: req.params.id }})
      if (!favorite) throw new createError(409, 'You have not favorited this viewpoint')

      await Favorite.destroy({ where: { userId: req.user.id, viewpointId: req.params.id }})

      res.json({
        status: 'success',
        data: { favorite }
      })

    } catch (error) {
      next (error)
    }
  }
}

module.exports = favoriteController