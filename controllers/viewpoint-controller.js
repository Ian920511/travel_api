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

      const category = await Category.findByPk(categoryId)

      if (!category) throw new createError(404, 'Category not found')

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
  },

  getViewpoint: async (req, res, next) => {
    try {
      const viewpoint = await Viewpoint.findByPk(req.params.id)

      if (!viewpoint) throw new createError(404, "Viewpoint didn't exist")

      res.json({
        status: 'success',
        data: {
          viewpoint
        }
      })


    } catch (error) {
      next (error)
    }
  },

  putViewpoint: async (req, res, next) => {
    try {
      const { name, address, image, categoryId } = req.body

      if (!name) throw new createError(400, 'Viewpoint name is required')

      const oldViewpoint = await Viewpoint.findByPk(req.params.id)
      if (!oldViewpoint) throw new createError(404, "Viewpoint doesn't exist")

      await Viewpoint.update({ name, address, image, categoryId }, { where: { id: req.params.id }})
      
      const newViewpoint = await Viewpoint.findByPk(req.params.id)

      res.json({
        status: 'success',
        data: { newViewpoint }
      })

    } catch (error) {
      next (error)
    }
  },

}

module.exports = viewpointController