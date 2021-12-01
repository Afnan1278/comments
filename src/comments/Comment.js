import {React,useState} from 'react'
import { address, random } from 'faker'
import Form from "../Form/Form"
function Comment({comment,reply}) {
    const [replies,setReplies] = useState([])
    const [form,setForm] = useState(false)
    
    const updateReplies = (name,text)=>{
        if(text !== ''){
            setReplies([...replies,{id: random.uuid(),name:name, text:text}])             
        }
        setForm(!form)
    }
    const addReply = () =>{
        setForm(!form)
        console.log(form)
        
 }
    const nestedComments = (replies || []).map(comment => {
      return <Comment key={comment.id} comment={comment} type="child" />
    })
  
    return (
      <div style={{"marginLeft": "100px", "marginTop": "20px"}}>
        <div>@  {comment.name}<br /> comment Text:  {comment.text}</div>
        <button onClick={addReply}>reply</button>
        {form && <Form updateReplies = {updateReplies} parentName = {comment.name}></Form>}
        {nestedComments}
      </div>
    )
  }

export default Comment
