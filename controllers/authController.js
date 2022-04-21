const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Cart = require('../models/Cart')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// register a new user
module.exports.registerUser = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const { username, email, password } = req.body

		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = await User.create({ username, email, password: hashedPassword })

		// create a cart for user
		const cart = await Cart.create({ userId: newUser.id })
		res.status(201).json({ success: true, newUser: newUser })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

// user login
module.exports.userLogin = async (req, res) => {
	const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).json({ success: false, validationErrors })
	}

	try {
		const { username, password } = req.body
		const user = await User.findOne({ username })
		if (!user) {
			return res.status(404).json({ success: false, error: 'User not Found' })
		}

		const passwordCompare = await bcrypt.compare(password, user.password)
		if (!passwordCompare) {
			return res.status(403).json({ success: false, error: 'Invalid Password' })
		}

		const payload = {
			id: user.id,
			isAdmin: user.isAdmin
		}
		const authToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
		res.json({ success: true, authToken })
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}
