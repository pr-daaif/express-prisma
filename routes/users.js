const express = require('express')

const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const router = express.Router()

/**
 * Get all users
 */
router.get('/', async (req, res, next) => {
    const users = await prisma.user.findMany()
    res.send({'All users': users})
})
router.get('/:id', (req, res, next) => {
    res.send('Get user id ' + req.params.id)
})
router.post('/',async  (req, res, next) => {
    const user = await prisma.user.create({
        data: req.body
    })
    res.send(['Add new user ' , user])
})
router.patch('/:id', (req, res, next) => {
    res.send(['Patch new user ', req.params.id , req.body])
})

router.delete('/:id', (req, res, next) => {
    res.send('Delete user id ' + req.params.id)
})

module.exports = router