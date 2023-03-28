import axios from "axios";
const env = import.meta.env;

const restHeader = { 
  "Content-Type": "application/json", 
  "Accept":       "application/json"
} 

export const formAPI = () => {
  const greeting = async () => {
    await axios.get(env._URL+"/greeting");
  }

  // only json req/res
  const post = async (form:object) => {
    const url:string      = env._URL+"/crear";
    const data:string     = JSON.stringify(form);    
    let response          = undefined;

    try {
      response = await axios.post(url, data, {headers: restHeader});
      return response.data; // TODO: CHECK THIS
    } 
    catch (error) {
      // TOOD: Implement logs
      return error;
    }
  }
  
  return { greeting, post }
}
