const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports.stripePayment = async (req, res) => {
	// charge client
	const charge = await stripe.charges.create({
		source: req.body.authToken,
		amount: req.body.amount,
		currency: 'inr'
	}, (stripeErr, stripeRes) => {
		if (stripeErr) {
			res.status(500).json({ success: false, stripeErr })
		} else {
			res.json({ success: true, stripeRes })
		}
	})
}