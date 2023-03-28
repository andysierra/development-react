import { useState } from "react";

export const useValidation = () => {

  const [inputs, setInputs] = useState<HTMLInputElement[]>([])

  const addValidatedField = (input:HTMLInputElement) => {
    
  }

  const validateAll = (form:object):boolean => {
    console.log('validating: '+JSON.stringify(form))
    return true;
  }

  return { validateAll };
}
