const Product = require('../models/Product')
const Cart = require('../models/Cart')

// add products to cart
module.exports.addToCart = async (req, res) => {
	try {
		const { productId } = req.params

		const product = await Product.findById(productId)
		if (!product) {
			return res.status(404).json({ success: false, error: 'Product not found' })
		}

		const productInCart = await Cart.find(
			{
				"products.productId": productId
			}
		)
		if (productInCart.length !== 0) {
			return res.status(400).json({ success: false, msg: 'Already in the cart' })
		}

		const cart = await Cart.findOneAndUpdate(
			{ userId: req.user.id },
			{
				$addToSet: {
					products: { productId }
				}
			},
			{ new: true }
		)

		res.json({ success: true, cart })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// remove products from cart
module.exports.removeFromCart = async (req, res) => {
	try {
		const { productId } = req.params

		const product = await Product.findById(productId)
		if (!product) {
			return res.status(404).json({ success: false, error: 'Product not found' })
		}

		const cart = await Cart.findOneAndUpdate(
			{ userId: req.user.id },
			{
				$pull: {
					'products': { productId }
				}
			},
			{ new: true }
		)

		res.json({ success: true, cart })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// increase product quantity in cart
module.exports.incProducts = async (req, res) => {
	try {
		const { productId } = req.params

		const product = await Product.findById(productId)
		if (!product) {
			return res.status(404).json({ success: false, error: 'Product not found' })
		}

		const productInCart = await Cart.find(
			{
				"products.productId": productId
			}
		)


		res.json({ success: true })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get cart for user
module.exports.getCartForUser = async (req, res) => {
	try {
		const cart = await Cart.findOne({ userId: req.user.id })
		res.json({ success: true, cart })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get all carts --admin
module.exports.getAllCarts = async (req, res) => {
	try {
		const cart = await Cart.find()
		res.json({ success: true, cart })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}