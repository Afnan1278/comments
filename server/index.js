const express= require("express")
const app = express()
const cors = require("cors")
const db = require("./models");

app.use(cors());
app.use(express.json());
// Routes
const CommentRouter = require('./routes/Comments')
app.use('/comments', CommentRouter)
// const RepliesRouter = require('./routes/Replies')
// app.use('/replies', RepliesRouter)


db.sequelize.sync().then(() => {
    app.listen(3001, ()=>{
        console.log("server started at port 3001")
    })
}).catch(err=>{
    console.log("error::",err)
})
