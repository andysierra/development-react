import {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => { 

  const [inputValue, setInputValue] = useState('');

  const onChange = ({target}) => setInputValue(target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if(inputValue.trim().length > 2) {
      setCategories(cats => cats.includes(inputValue)? cats : [...cats, inputValue]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type        = "text"
        className   = "form-control"
        value       = {inputValue}
        pattern     = "^.{3,}$"
        required    = {true}
        title       = "Debe tener mínimo 3 letras"
        placeholder = 'Buscar un GIF'
        onChange    = {onChange}/>
    </form>
  );

};

AddCategory.propTypes = {
  setCategories : PropTypes.func.isRequired
}

export default AddCategory;