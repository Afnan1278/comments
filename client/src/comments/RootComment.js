import {React,useState, useEffect} from 'react'
import * as Reacts from 'react';
import { random } from 'faker'
import Comment from './Comment'
import axios from 'axios'

// Material Imports //
import  Button  from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
// import IconButton from '@material/icons/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import Stack from '@material-ui/core/Stack';

 const RootComment= () => {

    

    const [comments, setComments] = useState([])
    const [showText, setShowtext] = useState(false)
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false);


    useEffect (()=>{
        axios.get("http://localhost:3001/comments").then((res)=>{
            console.log(res)
            setComments(res.data)
        }).catch( err => {
            console.log(err)
        })

    }, [])
    const addComment = ()=>{
        
        setShowtext(!showText)
        if(text !== ''){
            const payLoad = {parentId: null,name:name, text:text, replies:[]}
            axios.post("http://localhost:3001/comments",payLoad).then(
                setComments([...comments,{name:name, text:text, replies:[]}])  
            ).catch(err => {
                console.log(err)
            })
                      
        }
        setText('')
        setName('')
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const action = (
        <Reacts.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          
        </Reacts.Fragment>
      );
    return (
        <div>
        <div className="mainContainer" >
            <div className="formContainer" style={{padding:'4%'}}>
                <form onSubmit={addComment}>
                    <h1 className="title" >New Post</h1>
                    <label>Name</label>
                    <div >

                    {/* <AccountCircle  sx={{ color: 'lightgrey', mr: 1, my: 0.5 }} /> */}
                    <TextField className="comment-form-textarea"  id="input-with-sx"   variant="outlined"  placeholder="Name..."  value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <label>Comment</label>
                    <TextField
                        id="input-with-sx" 
                        variant="outlined"
                        placeholder="Create a new post... "
                        className="comment-form-textarea"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <Button type="submit" color="primary" variant="contained">add comment</Button>
                    </div>
                    
                    <Snackbar
                        open={open}
                        color="lightgrey"
                        autoHideDuration={3000}
                        onClose={handleClose}
                        message="Comment Added Successfully"
                        
                        action={action}
                    />
                    
                </form>
            </div>
        </div>

        <div className="list">
            {
                comments.length>0 &&(
                <div style={{"width":"100%"}}>
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
        </div>
    )
}

export default RootComment
