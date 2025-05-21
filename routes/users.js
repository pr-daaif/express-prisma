const express = require('express')

const router = express.Router()

/**
 * Get all users
 */
router.get('/', (req, res, next) => {
    res.send('Get all users')
})
router.get('/:id', (req, res, next) => {
    res.send('Get user id ' + req.params.id)
})
router.post('/', (req, res, next) => {
    res.send(['Add new user ' , req.body])
})
router.patch('/:id', (req, res, next) => {
    res.send(['Patch new user ', req.params.id , req.body])
})

router.delete('/:id', (req, res, next) => {
    res.send('Delete user id ' + req.params.id)
})

module.exports = router