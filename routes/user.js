const router = require('express').Router()
const {
	updateUser,
	deleteUser,
	getUserData,
	getAllUsers,
	getUserStats
} = require('../controllers/userController')
const verifyLoginSession = require('../middlewares/verifyLoginSession')
const verifyAdmin = require('../middlewares/verifyAdminLogin')

// update a user
router.put('/updateUser/:id', verifyLoginSession, updateUser)

// delete a user
router.delete('/deleteUser/:id', verifyLoginSession, deleteUser)

// get user data
router.get('/getUser', verifyLoginSession, getUserData)

// get user data --admin
router.get('/getAllUsers', verifyAdmin, getAllUsers)

// get user stats --admin
router.get('/stats', verifyAdmin, getUserStats)

module.exports = router