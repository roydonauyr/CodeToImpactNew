const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

// Description: Register new user
// Route: POST /api/users/register
// Access: Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, department } = req.body

  if (!name || !email || !password || !department) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    department,
  })

  if (user) {
    res
      .cookie('token', generateToken(user._id), {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 3600000),
      })
      .status(200)
      .json({
        _id: user.id,
        name: user.name,
        email: user.email,
        department: user.department,
      })
  } else {
    res.status(400)
    throw new Error('Invalid user data!')
  }
})

// Description: Authenticate a user
// Route: POST /api/users/login
// Access: Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res
      .cookie('token', generateToken(user._id), {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 3600000),
      })
      .status(200)
      .json({
        _id: user.id,
        name: user.name,
        email: user.email,
        department: user.department,
      })
  } else {
    res.status(400)
    throw new Error('Invalid credentials!')
  }
})

// Description: Logout user
// Route: POST /api/users/logout
// Access: Public
const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.clearCookie('access_token')
    res.status(200).json({ message: 'Cookies cleared. User logged out!' })
  } catch (error) {
    res.status(500)
    throw new Error('Error clearing cookies!')
  }
})

// Description: Get user data
// Route: GET /api/users/check
// Access: Private
const check = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  check,
}
