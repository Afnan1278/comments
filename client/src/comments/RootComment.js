import {React,useState, useEffect} from 'react'
import { random } from 'faker'
import Comment from './Comment'
import axios from 'axios'
 const RootComment= () => {

    useEffect (()=>{
        axios.get("http://localhost:3001/posts").then((res)=>{
            console.log(res)
        })
    }, [])

    const [comments, setComments] = useState([])
    const [showText, setShowtext] = useState(false)
    const [text, setText] = useState('')
    const [name, setName] = useState('')

    const addComment = ()=>{
        
        setShowtext(!showText)
        if(text !== ''){
            setComments([...comments,{id: random.uuid(),name:name, text:text}])             
        }
        setText('')
        setName('')
    }
    return (
        <div>
            <button onClick={addComment}>add comment</button>
            {showText &&
            <div>
            <div >
                <label>Name</label>
                <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                
                />
            </div>
            <div >
                <label>Comment</label>
                <input
                type='text'
                placeholder='Add Comment Text'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            </div>
            
            }

            {
                comments.length>0 &&(
                <div>
                    {comments.map((comment)=>{
                     return (

                            <Comment key={comment.id} comment={comment}  />

                        )
                  
                    })
                    }
                </div>
                )
            }
           
        </div>
    )
}

export default RootComment