const res = require('express/lib/response')
const nodemailer = require('nodemailer')
require('dotenv').config()

const sendEmail = async (res, email, subject, text, html) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			service: process.env.EMAIL_SERVICE,
			port: 587,
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD
			},
			tls: {
				// do not fail on invalid certs
				rejectUnauthorized: false
			}
		})

		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: email,
			subject,
			text,
			html
		})

		return res.json({ success: true, message: 'Email sent Successfully' })
	} catch (error) {
		return res.status(500).json({ success: false, error, message: 'Email not Sent' })
	}
}

module.exports = sendEmail