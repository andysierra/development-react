import { ChangeEvent, useEffect, useState } from "react"

export const useForm = (initialForm:object = {}) => {
  
  const [form, setForm]   = useState<object>(initialForm);
  const [ready, setReady] = useState<boolean>(true);  

  useEffect(() => {
    setReady(true);
  }, [form])

  const onChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm( prev => ({...prev, [name]: value}) );
    setReady(false);
  }

  const clean = () => {
    setForm(initialForm);
  }

  return [form, onChange, clean, ready] as const;
}
