const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const { errorHandler } = require('./middlewares/errorMiddleware')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Route middleware
app.use('/api/marks', require('./routes/marksRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')))

	app.get('*', (req, res) =>
		res.sendFile(
			path.resolve(__dirname, '../', 'client', 'build', 'index.html')
		)
	)
} else {
	app.get('/', (req, res) => res.send('Please set to production'))
}

// Middleware for converting errors to JSON
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
