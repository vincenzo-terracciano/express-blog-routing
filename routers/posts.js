const express = require('express');
const router = express.Router();

// index
router.get('/', (req, res) => {
    res.send('Return all posts here')
})

// show
router.get('/:post', (req, res) => {
    res.send(`Show post: ${req.params.post}`)
})

// store
router.post('/', (req, res) => {
    res.send('Store a new post')
})

// update
router.put('/:post', (req, res) => {
    res.send(`Update post: ${req.params.post}`)
})

// modify
router.patch('/:post', (req, res) => {
    res.send(`Modify post: ${req.params.post}`)
})

// delete
router.delete('/:post', (req, res) => {
    res.send(`Delete post: ${req.params.post}`)
})

module.exports = router