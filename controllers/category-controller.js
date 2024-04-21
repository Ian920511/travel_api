const { Category } = require('../models')

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
  }
}

module.exports = categoryController