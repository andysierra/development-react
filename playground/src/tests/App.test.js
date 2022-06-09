/* import { render } from "@testing-library/react"; */
import App from "../App";
import {shallow} from 'enzyme';

describe('Pruebas de <App/>', () => {
  /* test('Debe mostrar mensaje "Tu nombre es ... y tu apellido es ..."', done => {
    
    const name = "Goku";
    const wrapper = render(<App name={name}/>);
    const txt = wrapper.findByText();

    txt.then(what=>{
      console.log(what);
      done();
    });
  }); */

  test('debe de mostrar <App/> correctamente', () => {
    const name      = 'Ionut';
    const apellido  = 'Rayannez';
    const saludo = <p>Tu nombre es {name} y tu apellido es {apellido}</p>;

    const wrapper = shallow(<App name={name} apellido={apellido}/>);
    
    //expect(wrapper.contains(saludo)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  test('El name no debe ser vacío', () => {
    const name      = 'perro';
    
    const wrapper = shallow(<App name={name}/>);

    console.log(wrapper.props().name);
  });
})