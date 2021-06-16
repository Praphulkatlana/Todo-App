import React from 'react'
import { TodoItem } from '../Components/TodoItem'

export const Todo = (props) => {
    
    return (
       <div>
        { props.todos.length >0 ?
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                }).reverse() : <div className="containerCenter textCenter">
                <div className="ui card">
                  <div className="content">
                   <p>No Todo</p>
                  </div>
                </div>
                </div>
            }
        </div>
    )
}
