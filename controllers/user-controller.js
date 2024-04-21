const bcrypt = require('bcryptjs')
const db = require('../models')
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


}
module.exports = userController