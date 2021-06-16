import React from 'react'
import { Checkbox } from 'semantic-ui-react'

export const TodoItem = ({todo,onDelete}) => {
    const style = {
        paddingLeft: '80px'
      };
      
    return (
<div className="containerCenter">
<div className="ui card">
  <div className="content">
    <div className="header">{todo.title}</div>
  </div>
  <div className="content">
   
    <div className="ui small feed">
     
      <div className="event">
        <div className="content">
          <div className="summary">
            <p>{todo.desc}</p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  <div class="extra content">
    <button class="ui button"onClick={()=>{onDelete(todo)}}>Delete</button>
    <Checkbox style={style} label='Completed'></Checkbox>
  </div>
</div>
<br></br>
</div>
    )
}


// <div>
//             <h1>{todo.title}</h1>
//             <p>{todo.desc}</p>
//             <hr></hr>
//             <button onClick={()=>{onDelete(todo)}}>Delete</button>
//         </div>

