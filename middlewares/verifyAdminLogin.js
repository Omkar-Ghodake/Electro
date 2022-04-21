const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyAdmin = (req, res, next) => {
	try {
		const token = req.header('auth-token')
		const data = jwt.verify(token, process.env.JWT_SECRET)
		if (!data.isAdmin) {
			return res.status(403).json({ success: false, error: 'Forbidden Access' })
		}

		next()
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

module.exports = verifyAdmin