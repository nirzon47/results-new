const router = require('express').Router()
const {
	getMarks,
	postMarks,
	putMarks,
	deleteMarks,
} = require('../controllers/marksController')

// GET and POST entries
router.route('/').get(getMarks).post(postMarks)

// PUT and DELETE entries
router.route('/:id').put(putMarks).delete(deleteMarks)

module.exports = router
