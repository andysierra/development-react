import { useState } from "react";

export const useForm = ( defaultForm = {}, customValidation = undefined ) => {
  
  const [form, setForm] = useState(defaultForm);

  const onInputChange = ({target}) => {
    const {name, value} = target;
    if(!name) throw new Error('Field don`t have a name attribute!');

    // ... validation stuff

    setForm({
      ...form,
      [name]: value
    });
  }

  const onReset = () => { setForm(defaultForm) }

  const validate = () => customValidation? customValidation() : false;

  return {
    ...form,
    form,
    onInputChange,
    onReset,
    validate
  }
}