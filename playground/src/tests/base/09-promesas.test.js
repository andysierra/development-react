import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../data/heroes";

describe('Pruebas con promesas', () => { 
  test('Debe retornar un héroe', done => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(res=>{
        expect(res).toEqual(heroes[0]);
        done();
      });
  });

  test('Debe retornar un mensaje de error', done => {
    const id = 100;
    getHeroeByIdAsync(id)
      .catch(res=>{
        expect(res).toBe('No se pudo encontrar el héroe');
        done();
      });
  });
})