const router = require('express').Router()
const {
	createProduct,
	updateProduct,
	deleteProduct,
	getAllProducts
} = require('../controllers/productController')
const verifyAdmin = require('../middlewares/verifyAdminLogin')
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

// get all products
router.get('/', getAllProducts)

module.exports = router