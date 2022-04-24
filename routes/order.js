const router = require('express').Router()
const {
	newOrder,
	getSingleOrder,
	getAllOrders,
	myOrders,
	updateOrderStatus,
	deleteOrder
} = require('../controllers/orderController')
const verifyLoginSession = require('../middlewares/verifyLoginSession')
const verifyAdmin = require('../middlewares/verifyAdminLogin')
const { body } = require('express-validator')

// create an order
router.post('/newOrder',
	[
		body('shippingInfo', 'Shipping Information is Required').exists(),
		body('orderItems', 'Order Items is Required').exists().isArray(),
		body('paymentInfo', 'Payment Information is Required').exists(),
		body('itemsPrice', 'Items Price is Required').exists(),
		body('taxPrice', 'Tax Price is Required').exists(),
		body('shippingPrice', 'Shipping Price is Required').exists(),
		body('totalPrice', 'Total Price is Required').exists(),
		body('orderStatus', 'Order Status is Required').exists()
	],
	verifyLoginSession,
	newOrder
)

// get logged in user's orders
router.get('/myOrders', verifyLoginSession, myOrders)

// get single order --admin
router.get('/singleOrder/:id', verifyAdmin, getSingleOrder)

// get all orders --admin
router.get('/allOrders', verifyAdmin, getAllOrders)

// update order status --admin
router.put('/updateOrderStatus/:id',
	[
		body('orderStatus').exists()
	],
	verifyAdmin,
	updateOrderStatus
)

// delete order --admin
router.delete('/deleteMyOrder/:id', verifyAdmin, deleteOrder)

module.exports = router