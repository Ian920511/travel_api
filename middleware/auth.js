const createError = require('http-errors')
const jwt = require('jsonwebtoken')

const authenticated = async (req, res, next) => {
  try {
    const { authorization } = req.headers

    if (!authorization) {
      throw createError(401, 'You need login first')
    }
    
    const token =  authorization.split(' ')[1]

    try {
      const decoded = await jwt.verify(token, process.env.TOKEN_SECRET)

      req.user = decoded

      next()
    } catch (error) {
      throw createError(401, 'Login authentication has expired or is invalid. Please log in again.')
    }

  } catch(error) {
    next(error)
  }
}

const authenticatedAdmin = (req, res, next) => {
  const { user } = req

  if (!user || !user.isAdmin) {
    return next (createError(403, 'Unauthorized Access'))
  }

  next()
}

module.exports = { authenticated, authenticatedAdmin }