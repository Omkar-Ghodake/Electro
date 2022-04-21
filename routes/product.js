const express = require('express')
const {
	createProduct,
	updateProduct,
	deleteProduct,
	getAllProducts
} = require('../controllers/productController')
const router = express()
const verifyAdmin = require('../middlewares/verifyAdminLogin')
const { body } = require('express-validator')

// create a product --admin
router.post('/createProduct',
	verifyAdmin,
	[
		body('title', 'Title should contain at least 6 characters').isLength({ min: 6 }),
		body('desc', 'Description should contain at least 10 characters').isLength({ min: 10 }),
		body('img', 'Should be url').isURL(),
		body('categories', 'Category cannot be empty').exists(),
		body('price', 'Price Should be a number').isNumeric(),
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