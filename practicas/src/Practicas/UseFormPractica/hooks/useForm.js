import { useState } from "react"

export const useForm = (init = {}) => {
  
  const [form, setForm] = useState(init);

  const onChange = ({target}) => {
    const {name, value} = target;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  }

  const onClean = () => setForm(init);
  
  return {
    ...form,
    onChange,
    onClean
  }
}
