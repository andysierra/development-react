import { formAPI } from "./api/formAPI";
import { useForm } from "./hooks/useForm/useForm"
import { useValidation } from "./hooks/useForm/useValidation";

const initial:object = {
  nombre  : '',
  edad    : 0,
  correo  : ''
}

export const Form1 = () => {

  const { greeting, post } = formAPI();
  const { validateAll } = useValidation();
  const [{nombre, edad, correo}, onChange, onSubmit] = useForm(initial, validateAll, /* greeting */ post);

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group w-25">
        <label htmlFor="nombre">Nombre:&nbsp;</label>
        <input 
          className="form-control"
          type="text" 
          name="nombre" 
          id="nombre"
          value={nombre}
          onChange={onChange} />
      </div>

      <div className="form-group w-25">
        <label htmlFor="edad">Edad:&nbsp;</label>
        <input 
          className="form-control"
          type="number" 
          name="edad" 
          id="edad"
          value={edad}
          onChange={onChange}  />
      </div>

      <div className="form-group w-25">
        <label htmlFor="correo">Correo:&nbsp;</label>
        <input 
          className="form-control"
          type="text" 
          name="correo" 
          id="correo"
          value={correo}
          onChange={onChange}  />
      </div>

      <button type="submit" className="btn btn-success">
        <i className="bi bi-send"></i>
        &nbsp;Send
      </button>
    </form>
  )
}
