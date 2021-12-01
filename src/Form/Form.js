import {React,useState} from "react"
function Form ({updateReplies,parentName}){
    const [name,setName] = useState('')
    const [text,setText] = useState(`@${parentName} `)
    return(
        
            <div>
            <div>
                <label>Name</label>
                <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                
                />
            </div>
            <div >
                <label>Reply</label>
                <input
                type='text'
                placeholder={`${parentName}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <button onClick={()=>updateReplies(name,text)}>Submit</button>
            </div>
            
            
            

    )}

export default Form