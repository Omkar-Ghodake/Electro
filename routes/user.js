const router = require('express').Router()
const {
	updateUser,
	deleteUser,
	getUserData,
	getAllUsers,
	getUserStats,
	changePassword,
	sendEmail,
	resetPassword,
	changeIsAdmin
} = require('../controllers/userController')
const verifyLoginSession = require('../middlewares/verifyLoginSession')
const verifyAdmin = require('../middlewares/verifyAdminLogin')
const verifyLink = require('../middlewares/verifyPasswordResetLink')
const { body } = require('express-validator')

// update a user
router.put('/updateUser', verifyLoginSession, updateUser)

// delete a user
router.delete('/deleteUser/:id', verifyLoginSession, deleteUser)

// get user data
router.get('/getUser', verifyLoginSession, getUserData)

// update isAdmin --admin
router.post('/changeIsAdmin',
	[
		body('userId', 'User ID required').exists(),
		body('isAdmin', 'Role required').exists()
	],
	verifyAdmin,
	changeIsAdmin
)

// get all users data --admin
router.get('/getAllUsers', verifyAdmin, getAllUsers)

// get user stats --admin
router.get('/stats', verifyAdmin, getUserStats)

// change password
router.put('/changePassword',
	verifyLoginSession,
	[
		body('prevPassword').isLength({ min: 8 }),
		body('newPassword').isLength({ min: 8 })
	],
	changePassword
)

// Send Password Reset Link to user's email
router.post('/resetPassword/sendEmail', verifyLoginSession, sendEmail)

// reset password
router.put('/resetPassword/:authToken',
	[
		body('newPassword').isLength({ min: 8 })
	],
	verifyLoginSession,
	verifyLink,
	resetPassword
)

module.exports = router