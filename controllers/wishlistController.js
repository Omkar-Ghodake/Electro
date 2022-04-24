const Wishlist = require('../models/Wishlist')
const User = require('../models/User')
const { validationResult } = require('express-validator')

// create wishlist
exports.createWishlist = async (req, res) => {
	try {
		const userId = req.user.id
		const { name } = req.body

		const wishlist = await Wishlist.find({ name, userId })
		if (wishlist.length !== 0) {
			return res.status(409).json({ success: false, error: 'Wishlist with this name already exists' })
		}

		const newWishlist = await Wishlist.create({ name, userId })
		res.status(201).json({ success: true, newWishlist })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// add product to wishlist
exports.addProductToWishlist = async (req, res) => {
	try {
		const { wishlistId, productId } = req.body

		const wishlist = await Wishlist.findById(wishlistId)

		if (!wishlist) {
			return res.status(404).json({ success: false, error: 'Wishlist not found' })
		}

		if ((wishlist.userId).toString() !== req.user.id) {
			return res.status(409).json({ success: false, error: 'Not Allowed' })
		}

		const updatedWishlist = await Wishlist.findByIdAndUpdate(
			wishlistId, {
			$addToSet: {
				products: productId
			}
		}, { new: true })
		res.json({ success: true, updatedWishlist })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// delete a product from wishlist
exports.deleteProductFromWishlist = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const wishlist = await Wishlist.findById(req.params.wishlistId)
		if (!wishlist) {
			return res.status(404).json({ success: false, error: 'Wishlist not found' })
		}

		if ((wishlist.userId).toString() !== req.user.id) {
			return res.status(405).json({ success: false, error: 'Not Allowed' })
		}

		const updatedWishlist = await Wishlist.findByIdAndUpdate(req.params.wishlistId,
			{
				$pull: {
					'products': req.body.productId
				}
			},
			{ new: true }
		)

		res.json({ success: true, updatedWishlist })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get wishlists for a specific user
exports.getUserWishlist = async (req, res) => {
	try {
		const userId = req.user.id
		const wishlists = await Wishlist.find({ userId })
		res.json({ success: true, wishlists })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get wishlist of any user --admin
exports.getAnyUserWishlist = async (req, res) => {
	try {
		const { userId } = req.params

		const user = await User.findById(userId)

		if (!user) {
			return res.status(404).json({ success: false, error: 'User not found' })
		}

		const wishlist = await Wishlist.find({ userId })
		res.json({ success: true, wishlist })

	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// update wishlist
exports.updateWishlist = async (req, res) => {
	try {
		const wishlist = await Wishlist.findById(req.params.id)
		if (!wishlist) {
			return res.status(404).json({ success: false, error: 'Wishlist not found' })
		}

		if ((wishlist.userId).toString() !== req.user.id) {
			return res.status(405).json({ success: false, error: 'Not Allowed' })
		}

		const updatedWishlist = await Wishlist.findByIdAndUpdate(req.params.id, {
			$set: req.body
		}, { new: true })
		res.json({ success: true, updatedWishlist })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// delete wishlist
exports.deleteWishlist = async (req, res) => {
	try {
		const wishlist = await Wishlist.findById(req.params.id)
		if (!wishlist) {
			return res.status(404).json({ success: false, error: 'Wishlist not found' })
		}

		if ((wishlist.userId).toString() !== req.user.id) {
			return res.status(405).json({ success: false, error: 'Not Allowed' })
		}

		const deletedWishlist = await Wishlist.findByIdAndDelete(req.params.id)
		res.json({ success: true, deletedWishlist })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}
