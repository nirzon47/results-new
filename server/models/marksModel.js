// Schema for the records

const mongoose = require('mongoose')

const marksSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter the name'],
		},
		math: {
			type: Number,
			required: [
				true,
				'Please enter math marks and make sure it is in the range of 0-100',
			],
			max: 100,
			min: 0,
		},
		chemistry: {
			type: Number,
			required: [
				true,
				'Please enter chemistry marks and make sure it is in the range of 0-100',
			],
			max: 100,
			min: 0,
		},
		physics: {
			type: Number,
			required: [
				true,
				'Please enter physics marks and make sure it is in the range of 0-100',
			],
			max: 100,
			min: 0,
		},
		percentage: {
			type: Number,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('result', marksSchema)
