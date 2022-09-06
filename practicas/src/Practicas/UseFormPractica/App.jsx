import React from 'react'
import { useForm } from './hooks/useForm'

export const App = () => {

  const {name, password, age, onChange, onClean} = useForm({
    name: "",
    password: "",
    age: 0
  });

  return (
    <div className="m-4 w-25">
      <h1>Práctica de forms</h1>
      <hr />

      <form className="form" method="POST">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input 
            type="text" 
            name="name" 
            className="form-control"
            value={name}
            onChange={onChange}
            placeholder="Nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Clave:</label>
          <input 
            type="password" 
            name="password" 
            className="form-control"
            value={password}
            onChange={onChange}
            placeholder="Clave" />
        </div>
        <div className="form-group">
          <label htmlFor="age">Edad:</label>
          <input 
            type="number" 
            name="age" 
            className="form-control"
            value={age}
            onChange={onChange}
            placeholder="Edad" />
        </div>
        <hr />
        <button 
          type="submit" 
          className="btn btn-sm btn-success mx-2"
          >Enviar</button>
        <button 
          type="button" 
          className="btn btn-sm btn-danger mx-2"
          onClick={onClean}>Limpiar</button>
      </form>

    </div>
  )
}
