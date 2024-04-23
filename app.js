if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()

const routes = require('./routes')
const errorHandler = require('./middleware/error-handler')

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/apis', routes)

app.all('/*', (req, res, next) => {
  next(createError(404, 'Invalid route'))
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})