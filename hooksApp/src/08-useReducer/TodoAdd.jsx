import React, { useState } from 'react'
import { useForm } from '../01-useState/hooks/useForm';

const onAddDef = () => { throw new Error('onAddDef not specified yet!') }

export const TodoAdd = ({ onAdd = onAddDef, sequence = -1 }) => {

  // hooks
  const {description, onInputChange, onReset, validate} = useForm({ description: ''}, ()=>{
    return (description && description.trim().length > 0)
  });
  const [valid, setValid] = useState(true);

  // form adds a new TODO
  const addNewTodo = (event, sequence, description) => {
    event.preventDefault();
    onReset();

    if(validate()) {
      onAdd({
        id:           sequence<0? 'todoId_'+Date.now() : `todoId_${sequence}_${Date.now()}`,
        description:  description,
        done:         false
      });
      setValid(true);
    }
    else setValid(false);
  }



  return (
    <form method="POST">

      <input 
        type        = "text" 
        className   = "form-control"
        placeholder = "Que hay que hacer?"
        name        = "description"
        value       = { description }
        onChange    = { onInputChange }
        />
        {
          (!valid) && 
            <div><p className="text-danger">La descripción no es válida!</p></div>
        }

      <button 
        type      = "submit" 
        className = "btn btn-success mt-2"
        onClick   = { e=>{addNewTodo(e, sequence, description)} }>
        <i className="bi bi-send-fill">&nbsp;</i>
        Enviar
      </button>
    </form>
  )
}
