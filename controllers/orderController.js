const Order = require('../models/Order')
const { validationResult } = require('express-validator')

// create a new order
exports.createOrder = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const { products, amount, address } = req.body

		const newOrder = await Order.create({
			userId: req.user.id, products, amount, address
		})

		res.json({ success: true, newOrder })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}

}

// add product to order
exports.addProductToOrder = async (req, res) => {

}