const router = require('express').Router()
const {
	stripePayment
} = require('../controllers/stripeController')
require('dotenv').config()

router.post('/', stripePayment)

module.exports = router