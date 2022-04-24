const jwt = require('jsonwebtoken')

const verifyLink = async (req, res, next) => {
	try {
		const { authToken } = req.params

		const data = jwt.verify(authToken, process.env.JWT_SECRET)

		if (data.id !== req.user.id) {
			return res.status(403).json({ success: false, error: 'Not Allowed' })
		}

		next()
	} catch (error) {
		res.status(500).json({ success: false, error })
	}
}

module.exports = verifyLink