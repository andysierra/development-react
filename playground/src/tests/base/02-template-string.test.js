import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js',()=>{
  test('getSaludo debe de retornar hola Fernando',()=>{
    const nombre = "Fernando"; 
    expect(getSaludo(nombre)).toBe("Hola "+nombre);
  });
});