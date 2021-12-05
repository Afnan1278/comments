// const express = require('express')
// const {Replies} = require('../models')
// const router = express.Router()

// router.get('/:id',async (req, res) => {
//     const replyList = await Replies.findAll({where: {commentId:id}});
//     console.log(replyList)
//     res.json(replyList)
// })

// router.get('/:parentReplyId/:level',async (req, res) => {
//     try {
//         let {parentReplyId,level}  = req.params
//         let result = await Replies.findAll({
//             where:{
//                 level,
//                 ReplyId:parentReplyId
//             }
//         })
//         let replies = result?result.dataValues:[];
//         console.log(result)

//         return res.status(200).json(result)    
                    
//         }
        
//      catch (error) {
//         console.log(error);
//         return res.status(500).json({error:error.message})
//     }
    
// })



// router.post('/',async (req, res) => {
//     try {
//         let reply = req.body;
//         reply.level  = 1;
//         console.log("reply:",reply)
//         if(reply.ReplyId){
//             let result = await Replies.findOne({where:{id:reply.ReplyId}});
//             if(!result){
//                 return res.status(500).json({error:"Parent reply not found!"});
//             }
//             let parentReply = result.dataValues;

//             reply.level = parentReply.level + 1
            
//         }
//         console.log(reply);

//         await Replies.create(reply);
//         res.json(reply)    
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({error:error.message})
//     }
    
// })

//  module.exports =router