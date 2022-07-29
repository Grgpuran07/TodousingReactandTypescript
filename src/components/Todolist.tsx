import React from 'react'
import { Todo } from '../model'
import Singletodo from './Singletodo';
 import "./styles.css"

 interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    completedtodo:Todo[];
    setCompletedtodo:React.Dispatch<React.SetStateAction<Todo[]>>;
 }
const Todolist:React.FC<Props> = ({todos,setTodos,completedtodo,setCompletedtodo}) => {
  return (
    <div className='todos'>
        <div className='container'>
        <div className='todoslist active-todo'>
            <span>Active todos</span>
        {
            todos.map((todo)=>{
                return  <Singletodo todo={todo} 
                 key={todo.id}
                 todos={todos}
                 setTodos = {setTodos}
                 completedtodo={completedtodo} 
                 setCompletedtodo={setCompletedtodo}/>
            })
        }
        </div>
        <div className='todoslist inactive-todo'>
           <span>In Active todos</span>
        {
            completedtodo.map((todo)=>{
                return  <Singletodo todo={todo} 
                 key={todo.id}
                 todos={todos}
                 setTodos = {setTodos}
                 completedtodo={completedtodo} 
                 setCompletedtodo={setCompletedtodo} />
            })
        }
        </div>
        </div>
    </div>
  )
}

export default Todolist