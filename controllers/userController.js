const User = require('../models/User')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const sendEmail = require('../utils/sendEmail')
require('dotenv').config()

// update user
exports.updateUser = async (req, res) => {
	try {
		const user = await User.findById(req.user.id)

		if (!user) {
			return res.status(404).json({ success: false, error: 'User not found' })
		}

		if (req.body.password) {
			return res.status(400).json({ success: false, error: 'Enable to Change Password here' })
		}

		const updatedUser = await User.findByIdAndUpdate(req.user.id, {
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

// update isAdmin --admin
exports.changeIsAdmin = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const user = await User.findByIdAndUpdate(req.body.userId, req.body, { new: true })
		if (!user) {
			return res.json({ success: false, error: 'User not Found' })
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

// change password
exports.changePassword = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const { prevPassword, newPassword } = req.body

		if (prevPassword === newPassword) {
			return res.status(400).json({ success: false, error: 'New Password should be different from Old Password' })
		}

		let user = await User.findById(req.user.id)

		const passwordCompare = await bcrypt.compare(prevPassword, user.password)
		if (!passwordCompare) {
			return res.status(403).json({ success: false, error: 'Previous Password is Incorrect' })
		}

		const salt = await bcrypt.genSalt(10)
		const newHashedPassword = await bcrypt.hash(newPassword, salt)
		user.password = newHashedPassword
		await user.save()

		res.json({ success: true, message: 'Password Changed Successfully' })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// Send Password Reset Link to user's email
exports.sendEmail = async (req, res) => {
	try {
		const user = await User.findById(req.user.id)
		const email = await user.email

		const payload = {
			id: user.id,
			isAdmin: user.isAdmin
		}
		const authToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '300s' })

		const link = `${process.env.BASE_URL}/user/resetPassword/${authToken}`

		await sendEmail(
			res,
			email,
			'Password Reset for \'ELECTRO\'',
			'The following password reset link is valid for only 5 mins',
			`<a href=${link}>Click Here</a> to reset password`
		)
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// reset password
exports.resetPassword = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const { newPassword } = req.body

		const user = await User.findById(req.user.id)

		const salt = await bcrypt.genSalt(10)
		const newHashedPassword = await bcrypt.hash(newPassword, salt)

		user.password = newHashedPassword
		await user.save()

		res.json({ success: true, message: 'Password Reset Successfull' })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}