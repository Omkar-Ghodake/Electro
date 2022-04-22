const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		products: [
			{
				productId: {
					type: Schema.Types.ObjectId,
					ref: 'Product',
					required: true
				},
				quantity: {
					type: Number,
					default: 1
				}
			}
		],
		amount: {
			type: Number,
			required: true
		},
		address: {
			street: {
				type: String,
				required: true
			},
			city: {
				type: String,
				required: true
			},
			state: {
				type: String,
				required: true
			},
			pinCode: {
				type: Number,
				required: true
			},
		},
		status: {
			type: String,
			default: 'pending'
		}
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)