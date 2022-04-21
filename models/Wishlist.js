const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WishlistSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		products: [{
			type: Schema.Types.ObjectId,
			ref: 'Product'
		}]
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Wishlist', WishlistSchema)