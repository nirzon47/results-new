const asyncHandler = require('express-async-handler')
const req = require('express/lib/request')
const res = require('express/lib/response')
const Marks = require('../models/marksModel')

// @desc Get marksheet
// @route GET /api/marks
// @access Public
const getMarks = asyncHandler(async (req, res) => {
	// Get all the marksheets
	const marks = await Marks.find().sort({ percentage: -1 })
	res.json(marks)
})

// @desc Make a new entry in marksheet
// @route POST /api/marks
// @access Public
const postMarks = asyncHandler(async (req, res) => {
	// Destructuring the request body
	const { name, math, chemistry, physics } = req.body

	// Validating if all the fields have been filled
	if (
		!req.body.name ||
		!req.body.math ||
		!req.body.chemistry ||
		!req.body.physics
	) {
		res.status(400)
		throw new Error('Please fill in all the fields')
	}

	if ((req.body.math || req.body.chemistry || req.body.physics) > 100) {
		res.status(400)
		throw new Error('Marks cannot exceed 100')
	}

	// Calculating the percentage
	let percent = (Number(math) + Number(chemistry) + Number(physics)) / 3

	const marks = await Marks.create({
		name: name,
		math: math,
		chemistry: chemistry,
		physics: physics,
		percentage: percent,
	})

	res.json(marks)
})

// @desc Edit marksheet
// @route PUT /api/marks/:id
// @access Public
const putMarks = asyncHandler(async (req, res) => {
	const marks = await Marks.findById(req.params.id)

	if (!marks) {
		res.status(400)
		throw new Error('Marksheet not found')
	}

	if (
		!req.body.name ||
		!req.body.math ||
		!req.body.chemistry ||
		!req.body.physics
	) {
		res.status(400)
		throw new Error('Please fill in all the fields')
	}

	if ((req.body.math || req.body.chemistry || req.body.physics) > 100) {
		res.status(400)
		throw new Error('Marks cannot exceed 100')
	}

	let math = Number(req.body.math)
	let chemistry = Number(req.body.chemistry)
	let physics = Number(req.body.physics)

	// Calculate new percentage
	let percent = (math + chemistry + physics) / 3

	const updatedMarks = await Marks.findByIdAndUpdate(
		req.params.id,
		{
			name: req.body.name,
			math: req.body.math,
			chemistry: req.body.chemistry,
			physics: req.body.physics,
			percentage: percent,
		},
		{ new: true, runValidators: true }
	)
	res.json(updatedMarks)
})

// @desc delete an entry in marksheet
// @route DELETE /api/marks/:id
// @access Public
const deleteMarks = asyncHandler(async (req, res) => {
	const marks = await Marks.findById(req.params.id)

	// Check if the entry exists
	if (!marks) {
		res.status(400)
		throw new Error('Entry not found')
	}

	await marks.remove()
	res.status(200).json({ id: req.params.id })
})

module.exports = { getMarks, postMarks, putMarks, deleteMarks }
