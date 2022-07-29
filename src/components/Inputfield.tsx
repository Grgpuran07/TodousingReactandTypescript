import React, { useRef } from 'react'
// import { Interface } from 'readline'
import "./styles.css"

interface Props{
    todo:string 
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleSubmit:(e:React.FormEvent)=>void
}

const Inputfield = ({todo,setTodo,handleSubmit}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e)=>{handleSubmit(e);
         inputRef.current?.blur()}}>
        <input ref={inputRef} type="input" placeholder="Enter a task" className="input_bar" value={todo}
         onChange={(e)=>setTodo(e.target.value)}/>
        <button className="input_submit" type="submit" >Go</button>
    </form>
  )
}

export default Inputfield