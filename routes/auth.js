const router = require('express').Router()
const { body } = require('express-validator')
const {
	registerUser,
	userLogin
} = require('../controllers/authController')

// register a user
router.post('/register',
	[
		body('username', "Username should contain at least 5 characters").isLength({ min: 4 }),
		body('email', 'Enter a valid email').isEmail(),
		body('password', "Password should contain at least 8 characters").isLength({ min: 8 })
	],
	registerUser
)

// user login
router.post('/login',
	[
		body('username', "Username should contain at least 5 characters").isLength({ min: 4 }),
		body('password', "Password should contain at least 8 characters").isLength({ min: 8 })
	],
	userLogin
)

module.exports = router