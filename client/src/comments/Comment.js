import {React,useState} from 'react'
import Form from "../Form/Form"
import axios from 'axios'



// import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ReplyIcon from '@material-ui/icons/Reply';
import  Button  from '@material-ui/core/Button'
// import DeleteIcon from '@mui/icons-material/Delete';

function Comment({comment}) {
  console.log(comment)
    if(!comment.replies){
      comment = {...comment, replies:[]}
    }
    const [replies,setReplies] = useState(comment.replies)
    const [form,setForm] = useState(false)
    const updateReplies = (name,text)=>{
        if(text !== ''){
          const payLoad = {parentId: comment.id,name:name, text:text, replies:[]}
          axios.post("http://localhost:3001/comments",payLoad).then(
            setReplies([...replies,{parentId: comment.id,name:name, text:text, replies:[]}])
          ).catch(err =>{
            console.log(err)
          })
                         
        }
        setForm(!form)
    }
    const addReply = () =>{
        setForm(!form)
        
        
 }
    const nestedComments = (replies || []).map(comment => {
      return <Comment key={comment.id} comment={comment}  />
    })
  
    return (
      <div style={{ "border": comment.parentId === null ?  "1px solid lightgray" : "","marginLeft": "30px","marginBottom": "20px" ,"marginTop": "20px" ,"borderLeft":"1px solid lightgrey"}}>
        <div className="comment-author"> {comment.name}</div>
        <div className="comment-text">{comment.text}</div>
        <Button className="btn" onClick={addReply} type="submit" variant="text" startIcon={<ReplyIcon htmlColor="lightgrey" />}> Reply </Button>
        {form && <Form updateReplies = {updateReplies} parentName = {comment.name}></Form>}
        {nestedComments}
      </div>
    )
  }

export default Comment
