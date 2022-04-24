const Order = require('../models/Order')
const Product = require('../models/Product')
const { validationResult } = require('express-validator')

// create a new order
exports.newOrder = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const { shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

		const order = await Order.create({
			shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice, paidAt: Date.now(), user: req.user.id
		})

		res.status(201).json({ success: true, order })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get loggged in user's orders
exports.myOrders = async (req, res) => {
	try {
		const orders = await Order.find({ user: req.user.id })

		res.json({ success: true, orders })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get single order --admin
exports.getSingleOrder = async (req, res) => {
	try {
		const order = await Order.findById(req.params.id).populate('user', 'username email')

		if (!order) {
			return res.status(404).json({ success: false, error: 'Order not Found' })
		}

		res.json({ success: true, order })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get all orders --admin
exports.getAllOrders = async (req, res) => {
	try {
		const { sort, latest, limit } = req.query

		const orders = await Order.find().populate('user', 'username email')

		let totalAmt = 0
		orders.forEach(order => {
			totalAmt += order.totalPrice
		})

		if (sort || latest || limit) {
			if (sort) {
				const orders = await Order.find().populate('user', 'username email').sort({ _id: sort })

				let totalAmt = 0
				orders.forEach(order => {
					totalAmt += order.totalPrice
				})

				return res.json({
					success: true,
					"Total Orders": orders.length,
					"Total Amount": totalAmt,
					orders
				})
			}
			if (latest) {
				const orders = await Order.find().populate('user', 'username email').sort({ _id: '-1' }).limit(latest)

				let totalAmt = 0
				orders.forEach(order => {
					totalAmt += order.totalPrice
				})

				return res.json({
					success: true,
					"Total Orders": orders.length,
					"Total Amount": totalAmt,
					orders
				})
			}
			if (limit) {
				const orders = await Order.find().populate('user', 'username email').limit(limit)

				let totalAmt = 0
				orders.forEach(order => {
					totalAmt += order.totalPrice
				})

				return res.json({
					success: true,
					"Total Orders": orders.length,
					"Total Amount": totalAmt,
					orders
				})
			}
		}

		res.json({
			success: true,
			"Total Orders": orders.length,
			"Total Amount": totalAmt,
			orders
		})
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}


// update order status --admin
exports.updateOrderStatus = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const order = await Order.findById(req.params.id)
		if (!order) {
			return res.status(404).json({ success: false, error: 'Order not Found' })
		}

		if (order.orderStatus === 'Delivered') {
			return res.status(400).json({ success: false, message: 'Product has been already delivered' })
		}

		order.orderItems.forEach(async item => {
			await updateStock(item.product, item.quantity)
		})

		order.orderStatus = await req.body.orderStatus
		if (req.body.orderStatus === 'Delivered') {
			order.deliveredAt = Date.now()
		}

		const updatedOrder = await order.save({ validateBeforeSave: false })

		res.json({ success: true, updatedOrder })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// function for updating stock --updateOrderStatus
const updateStock = async (id, quantity) => {
	const product = await Product.findById(id)

	product.stock -= quantity
	await product.save({ validateBeforeSave: false })
}

// delete order --admin
exports.deleteOrder = async (req, res) => {
	try {
		const order = await Order.findById(req.params.id)
		if (!order) {
			return res.status(404).json({ success: false, error: 'Order not Found' })
		}

		const deletedOrder = await order.remove()
		res.json({ success: true, deletedOrder })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}