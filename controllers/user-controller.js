const bcrypt = require('bcryptjs')
const db = require('../models')
const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { User } = db

const userController = {
  signUp: async (req, res, next) => {
    try {
      const { name, email, password, confirmPassword } = req.body

      if (password !== confirmPassword) { throw createError(400, 'Password do not match') }

      const user = await User.findOne({ where: { email } })
      if (user) throw createError(409, 'Email already exist')

      const userName = await User.findOne({ where: { name } })
      if (userName) throw createError(409, 'User name already exist')

      const newUser = await User.create({
        name,
        email,
        password: await bcrypt.hashSync(password, 10),
      })

      if (!newUser) throw createError(500, 'Create user failed')

      res.json({
        status: 'success',
        message: '註冊成功',
        data: {
          user: newUser,
        }
      })

    } catch (error){
      next(error)
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body

      const loginUser = await User.findOne({ where: { email }})

      if (!loginUser) throw createError(404, 'This account not exist')

      const isMatch = await bcrypt.compare(password, loginUser.password)

      if (!isMatch) {
        throw createError(400, 'Email or password is wrong')
      }

      const user = {
        id: loginUser.id,
        eamil: loginUser.email,
        name: loginUser.name,
        isAdmin: loginUser.isAdmin
      }

      const token = jwt.sign(user, process.env.TOKEN_SECRET,{
        expiresIn: '7d'
      })

      res.json({
        status: 'success',
        message: '登入成功',
        data: {
          user,
          token
        }
      })


    } catch (error) {
      next (error)
    }

  },


}
module.exports = userController