const express = require('express')
const morgan = require('morgan')
const usersRouter = require('./routes/users')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({}))
app.use(express.static('public', {}))

app.use('/users', usersRouter)

app.listen(3000, () => console.log('server started'))


