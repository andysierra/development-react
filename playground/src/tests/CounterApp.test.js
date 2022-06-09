import CounterApp from "../CounterApp/CounterApp";
import {shallow} from 'enzyme';

describe('Pruebas para el <CounterApp/>', () => {

  let wrapper = shallow(<CounterApp/>);

  beforeEach(()=>{
    wrapper = shallow(<CounterApp/>);
  });

  test('debe de mostrar <CounterApp/> correctamente', () => {
    const value = 10;
    const wrapper = shallow(<CounterApp value={value}/>);
    const resultado = wrapper.find('h2').text();
    //expect(parseInt(resultado)).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el valor por defecto 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value}/>);
    const resultado = wrapper.find('h2').text().trim();
    expect(parseInt(resultado)).toBe(value);
  });

  test('debe de incrementar el counter al presionar el botón +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const resultado = wrapper.find('h2').text().trim();
    console.log(resultado);
    expect(parseInt(resultado)).toBe(1);
  });

  test('debe de disminuir el counter al presionar el botón -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const resultado = wrapper.find('h2').text().trim();
    console.log(resultado);
    expect(parseInt(resultado)).toBe(-1);
  });

  test('debe de reiniciar el counter al presionar el botón reset', () => {
    const value = 1993;
    const wrapper = shallow(<CounterApp value={value}/>);
    wrapper.find('button').at(0).simulate('click');
    expect(parseInt(wrapper.find('h2').text().trim())).toBe(value+1);
    wrapper.find('button').at(1).simulate('click');
    expect(parseInt(wrapper.find('h2').text().trim())).toBe(value);
    console.log(wrapper.find('h2').text().trim());
  });
})