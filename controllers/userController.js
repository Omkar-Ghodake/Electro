const User = require('../models/User')
const bcrypt = require('bcrypt')

// update user
exports.updateUser = async (req, res) => {
	try {
		const { id } = req.params
		const user = await User.findById(id)

		if (!user) {
			return res.status(404).json({ success: false, error: 'User not found' })
		}

		if (req.user.id !== id) {
			return res.status(405).json({ success: false, error: 'Not Allowed' })
		}

		if (req.body.password) {
			const salt = await bcrypt.genSalt(10)
			req.body.password = await bcrypt.hash(req.body.password, salt)
		}

		const updatedUser = await User.findByIdAndUpdate(id, {
			$set: req.body
		}, { new: true }).select('-password')

		res.json({ success: true, updatedUser })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// delete user
exports.deleteUser = async (req, res) => {
	try {
		const { id } = req.params
		const user = await User.findById(id)

		if (!user) {
			return res.status(404).json({ success: false, error: 'User not found' })
		}

		if (req.user.id !== id) {
			return res.status(405).json({ success: false, error: 'Not Allowed' })
		}

		const deletedUser = await User.findByIdAndDelete(id).select('-password')

		res.status(204).json({ success: true, deletedUser: deletedUser })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get user data
exports.getUserData = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password')
		if (!user) {
			return res.status(404).json({ success: false, error: 'User not Found' })
		}
		res.json({ success: true, user })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get all users data --admin
exports.getAllUsers = async (req, res) => {
	try {
		const query = req.query.results
		const sort = req.query.sort
		const users = query
			? await User.find().sort({ _id: sort }).limit(query)
			: await User.find()
		res.json({ success: true, users })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// get user stats --admin
exports.getUserStats = async (req, res) => {
	try {
		const date = new Date()
		const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

		const data = await User.aggregate([
			{
				$match: {
					createdAt: { $gte: lastYear }
				}
			},
			{
				$project: {
					month: { $month: '$createdAt' }
				}
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: 1 }
				}
			}
		])

		res.json({ success: true, data })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}