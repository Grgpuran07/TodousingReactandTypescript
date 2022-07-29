import React, { useEffect, useRef, useState } from 'react'
import { AiFillEdit } from "react-icons/ai"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {MdDownloadDone} from "react-icons/md"
import { Todo } from '../model'
import { setConstantValue } from 'typescript'
 
interface Props{
    todo:Todo,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    todos:Todo[]
    completedtodo:Todo[]
    setCompletedtodo:React.Dispatch<React.SetStateAction<Todo[]>>
}

const Singletodo:React.FC<Props> = ({todo,todos,setTodos,completedtodo,setCompletedtodo}) => {
    const [edit,setEdit] = useState<boolean> (false)
    const [editTodo,setEdittodo] = useState<string> ("")
    // const [editedTodo,setEditedtodo] = useState<string> ("")

    const handleDone = (id:number) =>{
        // console.log('right button is clicked.')
         
        // console.log(id)
       setTodos(todos.map((item)=>{
          return (item.id === id ? {...item,isDone:!item.isDone} : item)
        }))
    }

    const handleDelete = (id:number) =>{
        todos.map((item)=>{
            if(item.id === id){
                setCompletedtodo([...completedtodo,item])
            }
        })
        setTodos(todos.filter((item)=>{
            return (item.id !== id)
        }))
    }

    const handleEdit = (todo:Todo) =>{
        setEdit(!edit);
        setEdittodo(todo.todo);
        console.log(editTodo)
    }

    const handleSubmit = (e:React.FormEvent,id:number)=>{
        e.preventDefault()
        setTodos(todos.map((item)=>{
            return (item.id === id ? {...item,todo:editTodo} : item)
        }))
        setEdit(!edit)
        setEdittodo("")
    }

    const inputref = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputref.current?.focus();
    },[edit])
  return (
    <form className='singletodo' onSubmit={(e)=>handleSubmit(e,todo.id)}>
        {
            edit ? (<input ref={inputref} value={editTodo} onChange={(e)=>setEdittodo(e.target.value)}/>):
        (<div className='single-text'>
            {
                todo.isDone ? (<s>{todo.todo}</s>):(<p>{todo.todo}</p>)
            }
        </div>)
        }
        <div className='icons'>
           <AiFillEdit className='icon' onClick={()=>handleEdit(todo)}/>
           <RiDeleteBin5Fill className='icon'onClick={()=>handleDelete(todo.id)} />
           <MdDownloadDone className='icon' onClick={()=>handleDone(todo.id)}/>
        </div>
    </form>
  )
}

export default Singletodo;