const express = require('express')
const app = express()
require('dotenv').config()
const connectToMongo = require('./db')

// connect to db
connectToMongo()

// middlewares
app.use(express.json())

// api endpoints
app.use('/user', require('./routes/user'))
app.use('/auth', require('./routes/auth'))
app.use('/products', require('./routes/product'))
app.use('/wishlist', require('./routes/wishlist'))
app.use('/cart', require('./routes/cart'))
app.use('/orders', require('./routes/order'))

app.listen(process.env.PORT, () => {
	console.log(`Server running at https://localhost:${process.env.PORT}`)
})