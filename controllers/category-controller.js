const { Category } = require('../models')
const createError = require('http-errors')

const categoryController = {
  getCategories: async (req, res, next) => {
    try {
      const categories = await Category.findAll()

      res.json({
        status: 'success',
        data: { categories }
      })
    } catch (error) {
      next (error)
    }
  },

  postCategories: async (req, res, next) => {
    try {
      const { name } = req.body
      if (!name) throw new createError(400 ,'Category name is required')

      const category = await Category.create({ name })

      res.json({
        status: 'success',
        data: { category }
      })

    } catch (error) {
      next (error)
    }
  },

  putCategory: async (req, res, next) => {
    try {
      const { name } = req.body
      if (!name) throw new createError(400, 'Category name is required')

      const oldCategory = await Category.findByPk(req.params.id)
      if (!oldCategory) throw new createError(404, "Category doesn't exist")
      
      await Category.update({ name }, { where: { id: req.params.id }})
      
      const newCategory = await Category.findByPk(req.params.id)

      res.json({
        status: 'success',
        data: { newCategory }
      })

    } catch (error) {
      next (error)
    }
  },
}

module.exports = categoryController