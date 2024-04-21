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
      if (!name) throw new createError('Category name is required!')

      const category = await Category.create({ name })

      res.json({
        status: 'success',
        data: { category }
      })

    } catch (error) {
      next (error)
    }
  }
}

module.exports = categoryController