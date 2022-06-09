import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
  test('debe de retornar un héroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find(heroe=>heroe.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test('debe de retornar undefined si héroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test('debe de retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC'; 
    const testbed = heroes.filter(h=>h.owner===owner);

    expect(getHeroesByOwner(owner)).toEqual(testbed);
  });

  test('debe de retornar el tamaño del arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel'; 
    const testbed = 2;

    expect(getHeroesByOwner(owner).length).toBe(2);
  });
})