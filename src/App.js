import './App.css';
import { useState, useEffect } from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Header from "./Components/Header"
import { Todo } from './Components/Todo'
import { AddTodo } from './Components/AddTodo'
import { Footer } from './Components/Footer'
import { About } from './Components/About'

function App() {

  let intiTodos;
  if (localStorage.getItem("todos") === null) {
    intiTodos = []
  } else {
    intiTodos = JSON.parse(localStorage.getItem("todos"))

  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length > 0) {
      sno = todos.length + 1
    }
    else sno = 1
    const newTodo = {
      sno,
      title,
      desc
    }
    
    setTodos([...todos, newTodo])
  }

  const onDelete = (todo) => {
    console.log(todo)
    setTodos(todos.filter((item) => {
      
      return item !== todo
    }))
  }

  const [todos, setTodos] = useState(intiTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/addnew">
            <AddTodo addTodo={addTodo} />
          </Route>
          <Route exact path="/">
          <Todo todos={todos} onDelete={onDelete} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
