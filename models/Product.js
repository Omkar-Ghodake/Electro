const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true
		},
		desc: {
			type: String,
			required: true
		},
		images: [
			{
				public_id: {
					type: String,
					required: true
				},
				url: {
					type: String,
					required: true
				}
			}
		],
		categories: {
			type: Array,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		rating: {
			type: Number,
			default: 0
		},
		stock: {
			type: Number,
			required: true,
			default: 1
		},
		numOfReviews: {
			type: Number,
			default: 0
		},
		reviews: [
			{
				name: {
					type: String,
					required: true
				},
				rating: {
					type: Number,
					required: true
				},
				comment: {
					type: String
				}
			}
		]
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)