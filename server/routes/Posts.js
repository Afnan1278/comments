const express = require('express')
const {Posts} = require('../models')
const router = express.Router()

router.get('/',async (req, res) => {
    const postList = await Posts.findAll();
    console.log(postList)
    res.json(postList)
})

router.post('/',async (req, res) => {
    const post = req.body;
    console.log("posts:",post)

    await Posts.create(post);
    res.json(post)
})

module.exports =router