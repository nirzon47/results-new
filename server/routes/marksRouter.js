const router = require('express').Router()
const {
	getMarks,
	postMarks,
	putMarks,
} = require('../controllers/marksController')

router.route('/').get(getMarks).post(postMarks)

router.route('/:id').put(putMarks)

module.exports = router
