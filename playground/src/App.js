import React from 'react';
import PropTypes from 'prop-types';

const App = ({
  name,
  apellido
}) => {

  return (
    <>
      <h1>Hola mundo React!</h1>
      <hr></hr>
      <p>Tu nombre es {name} y tu apellido es {apellido}</p>
    </>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired
};

App.defaultProps = {
  apellido: '[sin apellidos]'
}

export default App;