const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  // Get token from cookie
  const { token } = req.cookies

  if (!token) {
    res.status(401)
    throw new Error('Not authenticated! Token is missing!')
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Get user from the token
    req.user = await User.findById(decoded.id).select('-password')
    next()
  } catch (error) {
    console.log(error)
    res.status(401)
    throw new Error('Not authenticated! Token is invalid')
  }
})

module.exports = {
  protect,
}
