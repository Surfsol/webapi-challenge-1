const express = require('express');

const router = express.Router();

const actionModel = require('../helpers/actionModel') 

router.get('/', (req, res) => {
    actionModel
        .get()
        .then(posts => {
            res.json(posts)
        })
        .catch(error =>
            res.status(500).json(error))
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    actionModel
        .get(id)
        .then(posts => {
            res.json(posts)
        })
        .catch(error =>
            res.status(500).json(error))
});

router.post('/', (req, res) => {
    const actionbody = req.body
    actionModel
        .insert(actionbody)
        .then(action => {
            res.json(action)
        })
        .catch(error =>
            res.status(500).json(error))
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    const actionbody = req.body
    actionModel
        .update(id, actionbody)
        .then(action => {
            res.json(action)
        })
        .catch(error =>
            res.status(500).json(error))
});

router.delete('/:id', (req, res) => {
    const id = req.params.id
    actionModel
        .remove(id)
        .then(action => {
            res.json(action)
        })
        .catch(error =>
            res.status(500).json(error))
});


module.exports = router