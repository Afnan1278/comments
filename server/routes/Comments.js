const express = require('express')
const {Comments} = require('../models')
const router = express.Router()
router.get('/',async (req, res) => {
    try {
        const commentList = await Comments.findAll();      

        function nested(data, pid = null) {
            return data.reduce((r, e) => {
              if (e.parentId == pid) {
                const obj = { ...e.dataValues }
                
                const replies = nested(data, e.id);
                if (replies.length) obj.replies = replies;
                r.push(obj)
              }
          
              return r;
            }, [])
          }
          const result = nested(commentList);
        return res.json(result);
                
    } catch (error) {
        res.status(500).json({error:error.message})
    }

})


router.post('/',async (req, res) => {

    try{
        const comment = req.body;
    
        await Comments.create(comment);
        res.json(comment)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

module.exports =router