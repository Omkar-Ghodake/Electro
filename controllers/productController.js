const Product = require('../models/Product')
const ApiFeatures = require('../utils/apiFeatures')
const { validationResult } = require('express-validator')

// create product --admin
exports.createProduct = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const newProduct = await Product.create(req.body)
		res.status(201).json({ success: true, newProduct })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// update product --admin
exports.updateProduct = async (req, res) => {
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
exports.deleteProduct = async (req, res) => {
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

// get all products details --admin
exports.getAllProductsDetails = async (req, res) => {
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

// get all products
exports.getAllProducts = async (req, res) => {
	try {
		const resultsPerPage = 8

		const apiFeat = new ApiFeatures(Product.find(), req.query)
			.search()
			.filter()
			.pagination(resultsPerPage)
		const products = await apiFeat.query

		return res.json({ success: true, products })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// add review
exports.addReview = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ validationErrors })
	}

	try {
		const { user, name, rating, comment, productId } = req.body

		if (user !== req.user.id) {
			return res.status(403).json({ success: false, error: 'Not Allowed' })
		}

		// const user = await User.findById(req.user.id)

		// if (!user) {
		// 	return res.status(404).json({ success: false, error: 'User not Found' })
		// }

		const review = {
			user, name, rating, comment
		}

		const product = await Product.findById(productId)
		if (!product) {
			return res.status(404).json({ success: false, error: 'Product not Found' })
		}

		const isReviewed = product.reviews.find(
			rev => rev.user.toString() === req.user.id.toString()
		)

		if (isReviewed) {
			product.reviews.forEach(rev => {
				if (rev.user.toString() === req.user.id.toString()) {
					rev.rating = rating,
						rev.comment = comment
				}
			})
		} else {
			product.reviews.push(review)
			product.numOfReviews = product.reviews.length
		}

		let avg = 0
		product.reviews.forEach(rev => { avg += rev.rating })
		product.ratings = avg / product.reviews.length

		await product.save()

		res.json({ success: true, rating: product.ratings, review: product.reviews })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get all products reviews
exports.getAllReviews = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ validationErrors })
	}

	try {
		const product = await Product.findById(req.query.productId)
		if (!product) {
			return res.status(404).json({ success: false, error: 'Product Not Found' })
		}

		res.json({ success: true, reviews: product.reviews })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// delete a review
exports.deleteReview = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const product = await Product.findById(req.query.productId)
		if (!product) {
			return res.status(404).json({ success: false, error: 'Product Not Found' })
		}

		const reviews = product.reviews.filter(
			(rev) => rev.id !== req.query.reviewId
		)

		let avg = 0
		reviews.forEach(rev => { avg += rev.rating })
		const ratings = avg / reviews.length

		const numOfReviews = reviews.length

		const updatedProduct = await Product.findByIdAndUpdate(req.query.productId, {
			reviews,
			ratings,
			numOfReviews
		}, { new: true, runValidators: true, useFindAndModify: false })

		res.json({ success: true, ratings, numOfReviews })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}