const express = require('express')
const router = express.Router()

const viewpointController = require('./../../controllers/viewpoint-controller')

router.get('/', viewpointController.getViewpoints)

module.exports = router