const express= require("express")
const app = express()
const cors = require("cors")
const db = require("./models");

app.use(cors());
app.use(express.json());
// Routes
const PostRouter = require('./routes/Posts')
app.use('/posts', PostRouter)


db.sequelize.sync().then(() => {
    app.listen(3001, ()=>{
        console.log("server started at port 3001")
    })
})
