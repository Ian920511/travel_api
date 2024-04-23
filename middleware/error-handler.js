const errorHandler = (error, req, res, next) => {
  let { statusCode, message } = {}

  statusCode = statusCode || error.statusCode || 500
  const status = statusCode.toString().startsWith('4') ? 'fail' : 'error'

  const response = {
    status,
    code: statusCode,
    message: message || error.message
  }

  res.status(statusCode).json(response)
}

module.exports = errorHandler