const jwt = require('jsonwebtoken')

const verifyLoginSession = async (req, res, next) => {
	try {
		const token = req.header('auth-token')
		if (!token) {
			return res.status(401).json({ success: false, error: 'Please Authenticate using valid token' })
		}

		const data = jwt.verify(token, process.env.JWT_SECRET)
		req.user = data
		next()
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

module.exports = verifyLoginSession