if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()

const routes = require('./routes')

const PORT = process.env.PORT || 3000
const db = require('./models')

app.use(express.json())

app.use('/apis', routes)

app.get('/', (req, res) => {
  res.send('hello world')
})
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})