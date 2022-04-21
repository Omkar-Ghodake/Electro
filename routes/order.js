const express = require('express')
const {
	createOrder
} = require('../controllers/orderController')
const router = express.Router()
const verifyLoginSession = require('../middlewares/verifyLoginSession')
const { body } = require('express-validator')

// create an order
router.post('/createOrder',
	[
		body('products').isArray().isLength({ min: 1 }),
		body('amount').exists().isNumeric(),
		body('address').exists()
	],
	verifyLoginSession,
	createOrder
)


module.exports = router