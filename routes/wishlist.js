const express = require('express')
const {
	createWishlist,
	addProductToWishlist,
	getUserWishlist,
	getAnyUserWishlist,
	updateWishlist,
	deleteWishlist,
	deleteProductFromWishlist
} = require('../controllers/wishlistController')
const router = express.Router()
const verifyLoginSession = require('../middlewares/verifyLoginSession')
const { body } = require('express-validator')
const verifyAdmin = require('../middlewares/verifyAdminLogin')

// create wishlist
router.post('/createWishlist', verifyLoginSession, createWishlist)

// add products to wishlist
router.put('/addProduct',
	verifyLoginSession,
	[
		body('wishlistId', 'Missing Wishlist ID').exists(),
		// body('productId', 'Missing Product ID').exists()
	],
	addProductToWishlist
)

// get all wishlists for a specific user
router.get('/', verifyLoginSession, getUserWishlist)

// get wishlist of any user --admin
router.get('/:userId', verifyAdmin, getAnyUserWishlist)

// update wishlist
router.put('/updateWishlist/:id', verifyLoginSession, updateWishlist)

// delete wishlist
router.delete('/deleteWishlist/:id', verifyLoginSession, deleteWishlist)

// delete a product from wishlist
router.put('/deleteProduct/:wishlistId',
	verifyLoginSession,
	[
		body('productId', 'Missing Product Id').exists()
	],
	deleteProductFromWishlist)

module.exports = router