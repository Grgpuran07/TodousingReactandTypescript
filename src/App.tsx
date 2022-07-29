import React, { useState } from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import { Todo } from './model';
import Todolist from './components/Todolist';

const  App:React.FC=()=> {
  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])
  const [completedtodo,setCompletedtodo] = useState<Todo[]>([])
   
  const handleSubmit = (e:React.FormEvent) =>{
       e.preventDefault()

       if(todo){
        setTodos([...todos,{id: Date.now(),todo,isDone:false,}])
        setTodo("")
       }
  }

  console.log(todos)
  return (
    <div className='App'>
      <div className='heading'>Taskify</div>
      <Inputfield todo={todo} setTodo = {setTodo} handleSubmit={handleSubmit}/>
      <Todolist todos={todos} setTodos = {setTodos} completedtodo={completedtodo} setCompletedtodo={setCompletedtodo}/>
    </div>
  )
}

export default App;
