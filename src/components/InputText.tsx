import React, { useRef } from 'react'
import './style.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputText: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <form className='input' onSubmit={(e) => {
        handleAddTodo(e)
        inputRef.current?.blur()
      }}>
        <input type="input" placeholder='Enter a task' name="" id="" className='input__text'
          ref={inputRef}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className='input__button'>Go</button>
      </form>
    </div>
  )
}

export default InputText
