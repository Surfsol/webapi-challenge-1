const express = require('express');

const router = express.Router();

const postModel = require("../helpers/projectModel")
const actionModel = require("../helpers/actionModel")

router.get('/', (req, res) => {
    const projectId = req.body.project_id
    postModel
        .getProjectActions(projectId)
        .then(posts => {
            res.json(posts)
        })
        .catch(error =>
            res.status(500).json(error))
});

router.get('/', (req, res) => {
    postModel
        .get()
        .then(posts => {
            res.json(posts)
        })
        .catch(error =>
            res.status(500).json(error))
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    postModel
        .get(id)
        .then(posts => {
            res.json(posts)
        })
        .catch(error =>
            res.status(500).json(error))
});

router.post('/', (req, res) => {
    const postBody = req.body
    postModel
        .insert(postBody)
        .then(project => {
            res.json(project)
        })
        .catch(error =>
            res.status(500).json(error))
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    const postBody = req.body
    if(!id){
        res.status(400).json({message: "id not found"})
    } else {
    postModel
        .update(id, postBody)
        .then(posts => {
            res.json(posts)
        })
        .catch(error =>
            res.status(500).json(error))
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id
    if(!id){
        res.status(400).json({message: "id not found"})
    } else {
    postModel
        .remove(id)
        .then(posts => {
            res.json(posts)
        })
        .catch(error =>
            res.status(500).json(error))
    }
});


module.exports = router