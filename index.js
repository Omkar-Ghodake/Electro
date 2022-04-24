const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const connectToMongo = require('./db')

// connect to db
connectToMongo()

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())

// api endpoints
app.use('/user', require('./routes/user'))
app.use('/auth', require('./routes/auth'))
app.use('/products', require('./routes/product'))
app.use('/wishlist', require('./routes/wishlist'))
app.use('/cart', require('./routes/cart'))
app.use('/orders', require('./routes/order'))
app.use('/payment', require('./routes/stripe'))

app.listen(process.env.PORT, () => {
	console.log(`Server running at https://localhost:${process.env.PORT}`)
})