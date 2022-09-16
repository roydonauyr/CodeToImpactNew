const express = require('express')
const {
  registerUser,
  loginUser,
  logoutUser,
  check,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.get('/check', protect, check)

module.exports = router
