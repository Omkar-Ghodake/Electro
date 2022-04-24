const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true
		},
		avatar: {
			public_id: {
				type: String
			},
			url: {
				type: String
			}
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)