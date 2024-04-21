const { Viewpoint } = require('../models')
const { Category } = require('../models')
const createError = require('http-errors')

const viewpointController = {
  getViewpoints: async (req, res, next) => {
    try {
      const viewpoints = await Viewpoint.findAll()

      res.json({
        status: 'success',
        data: {
          viewpoints
        }
      })


    } catch (error) {
      next (error)
    }
  },

  postViewpoints: async (req, res, next) => {
    try {
      const { name, address, image, categoryId } = req.body

      if (!name) throw new createError(400, 'Viewpoint name is required')

      const category = await Category.findByPk(categoryId, { raw: true })

      const viewpoint = await Viewpoint.create({
        name,
        address,
        image,
        categoryId: category.id
      })

      res.json({
        status: 'success',
        data: {
          viewpoint
        }
      })


    } catch (error) {
      next (error)
    }
  }

}

module.exports = viewpointController