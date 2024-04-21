const { Viewpoint } = require('../models')

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
  }

}

module.exports = viewpointController