import { Action } from "../../../types/global";
import { useForm } from "../hooks/useForm";

interface props {
  className : string,
  onAdd     : (action: Action) => void
}

export const Add = ({className="", onAdd}:props) => {

  const [form, onChange, clean, ready] = useForm({title:'', description:''});

  const submit = () => {
    let action:Action = {
      type    : 'add-todo',
      payload : form
    }
    while(!ready){}
    clean();
    onAdd(action);
  }

  return (
    <form 
      className = {"d-flex flex-column justify-content-start " + className}
      onSubmit  = { e=>{ e.preventDefault(); submit(); } } >

      <input 
        type          = "text" 
        name          = "title" 
        id            = "title" 
        className     = "form-control form-control-sm mb-1" 
        placeholder   = "Title"
        value         = {form['title']}
        onChange      = {onChange}
        autoComplete  = "off" />

      <textarea 
        name        = "description" 
        id          = "description" 
        className   = "form-control form-control-sm mb-1"
        cols        = {30} 
        rows        = {10} 
        placeholder = "Description"
        value       = {form['description']}
        onChange    = {onChange} >
      </textarea>

      <button 
        className = "btn btn-sm btn-success">
          Nuevo TODO
      </button>
    </form>
  )
}
