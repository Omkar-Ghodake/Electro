const router = require('express').Router()
const {
	createProduct,
	updateProduct,
	deleteProduct,
	getAllProducts,
	getAllProductsDetails,
	addReview
} = require('../controllers/productController')
const verifyAdmin = require('../middlewares/verifyAdminLogin')
const verifyLoginSession = require('../middlewares/verifyLoginSession')
const { body } = require('express-validator')

// create a product --admin
router.post('/createProduct',
	verifyAdmin,
	[
		body('title').exists(),
		body('desc').exists(),
		body('images').isArray(),
		body('categories', 'Category cannot be empty').exists(),
		body('price', 'Price Should be a number').isNumeric(),
		body('rating').isNumeric(),
		body('stock').isNumeric(),
	],
	createProduct
)

// update a product --admin
router.post('/updateProduct/:id', verifyAdmin, updateProduct)

// delete a product --admin
router.delete('/deleteProduct/:id', verifyAdmin, deleteProduct)

// get all products details --admin
router.get('/getAllProductDetails', verifyAdmin, getAllProductsDetails)

// get all products
router.get('/', getAllProducts)

// add a review
router.put('/addReview',
	verifyLoginSession,
	[
		body('user', 'User ID is Missing').exists(),
		body('name', 'Name is Missing').exists(),
		body('rating', 'Rating should be a Number').isNumeric(),
		body('comment', 'User ID is Missing').isLength({ min: 4 }),
		body('productId', 'Product ID is Missing').exists()
	],
	addReview
)

module.exports = router