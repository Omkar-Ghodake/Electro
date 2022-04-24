const jwt = require('jsonwebtoken')

const generateToken = async (res, user, tokenExpiry) => {
	const payload = {
		id: user.id,
		isAdmin: user.isAdmin
	}

	const cookieOptions = {
		expires: new Date(
			Date.now() + (600000 * 144)
		),
		httpOnly: true
	}
	const authToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: tokenExpiry })
	return res.cookie('authToken', authToken, cookieOptions).json({ success: true, message: 'Logged In' })
}

module.exports = generateToken