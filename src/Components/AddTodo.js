import React from 'react'
import {useState} from 'react'
import { useHistory } from "react-router-dom";

export const AddTodo = (props) => {
    const history = useHistory();
const [Title, setTitle] = useState("")
const [Desc, setDesc] = useState("")

    const additem=(e)=>{
        e.preventDefault();
        if(!Title){
            alert("Please enter title ")
        }
        if(!Desc){
            alert("Please enter Description")
        }
        else {
        props.addTodo(Title,Desc)

            setTitle("")
            setDesc("")
            history.push("/");
        }

    }


    return (

         <div class="ui raised very padded text container segment">
         
    <form class="ui form">
    <div class="equal width fields">
    <div class="field">
    <label for="form-input-control-first-name">Title</label>
    <div class="ui input">
    <input type="text" placeholder="Todo Title" id="form-input-control-first-name" value={Title}  onChange={(e)=>setTitle(e.target.value)}/>
    </div>
    </div>
    </div>
    <div class="field">
    <label for="form-textarea-control-opinion">Description</label>
    <textarea placeholder="Description" id="form-textarea-control-opinion" rows="3" value={Desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
    </div>
    <div class="field">
    <button onClick={additem} inverted color='green' id="form-button-control-public" class="ui button ">Add</button>
    </div>
    </form>
    </div>
    
    )
}


// <form>
// //         <label htmlFor="title">Title</label>
// //         <Input type="text" value={Title}id="title" onChange={(e)=>setTitle(e.target.value)}></Input><br/>
// //         <label htmlFor="desc">Description</label>
// //         <TextArea type="text" value={Desc}id="desc"onChange={(e)=>setDesc(e.target.value)}></TextArea><br/>
      //  <Button onClick={additem} inverted color='green'>
// //     Add
// //   </Button>
       
// //         </form>