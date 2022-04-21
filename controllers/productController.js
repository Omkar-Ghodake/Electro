const Product = require('../models/Product')
const { validationResult } = require('express-validator')

// create product --admin
module.exports.createProduct = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const newProduct = await Product.create(req.body)
		res.json({ success: true, newProduct })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// update product --admin
module.exports.updateProduct = async (req, res) => {
	try {
		const { id } = req.params

		const product = await Product.findById(id)

		if (!product) {
			return res.status(404).json({ success: false, error: 'Product not found', id })
		}

		const updatedProduct = await Product.findByIdAndUpdate(id, {
			$set: req.body
		}, { new: true })

		res.json({ success: true, updatedProduct })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// delete product --admin
module.exports.deleteProduct = async (req, res) => {
	try {
		const { id } = req.params

		const product = await Product.findById(id)
		if (!product) {
			return res.status(404).json({ success: false, error: 'Product not found' })
		}

		const deletedProduct = await Product.findByIdAndDelete(id)
		res.json({ success: true, deletedProduct })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get all products
module.exports.getAllProducts = async (req, res) => {
	try {
		const qCategory = req.query.category
		const qLatest = req.query.latest
		const qSort = req.query.sort

		let products

		if (qLatest) {
			products = qSort
				? await Product.find().sort({ _id: qSort }).limit(qLatest)
				: await Product.find().sort({ _id: -1 }).limit(qLatest)
		}
		if (qCategory) {
			products = qSort
				? await Product.find({
					categories: {
						$in: [qCategory]
					}
				}).sort({ _id: qSort })
				: await Product.find({
					categories: {
						$in: [qCategory]
					}
				})
		}
		if (!qCategory && !qLatest && !qCategory) {
			products = qSort
				? await Product.find().sort({ _id: qSort })
				: await Product.find()
		}
		return res.json({ success: true, products })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}
