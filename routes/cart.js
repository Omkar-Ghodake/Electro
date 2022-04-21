const express = require('express')
const {
	addToCart,
	removeFromCart,
	incProducts,
	getCartForUser,
	getAllCarts
} = require('../controllers/cartController')
const router = express.Router()
const verifyLoginSession = require('../middlewares/verifyLoginSession')
verifyAdmin = require('../middlewares/verifyAdminLogin')

// add products to cart
router.put('/addToCart/:productId', verifyLoginSession, addToCart)

// remove products from cart
router.put('/removeFromCart/:productId', verifyLoginSession, removeFromCart)

// increase product quantity in cart
router.put('/incProducts/:productId', verifyLoginSession, incProducts)

// get a cart for user
router.get('/', verifyLoginSession, getCartForUser)

// get all carts --admin
router.get('/allCarts', verifyAdmin, getAllCarts)

module.exports = router