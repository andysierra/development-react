import { ChangeEvent, FormEvent, useEffect, useState } from "react";
export const useForm = (
  initial     : object, 
  validation  : (form:object)=>boolean, 
  ...services : ((form:object)=>any)[]
) => {

  const [form, setForm] = useState<object>(initial);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => setReady(true), [form]);

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setReady(false);
    setForm(prev => ({...prev, [name]:value}));
  }

  const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(ready) {

      /* submition validation */
      if(!validation(form)) throw new Error('Validation exception!');

      /* run services */
      let responses = await Promise.all(services.map(s => s(form)));

      return responses;
    }
  }
  
  return [
    form as any,
    onChange,
    onSubmit,
    ready,
  ] as const;
}
