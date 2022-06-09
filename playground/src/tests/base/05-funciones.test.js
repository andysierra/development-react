import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
  test('getUser debe de retornar un objeto', () => { 
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test('getUsuarioActivo debe de retornar un objeto', () => { 
    
    const name = 'Fernando';

    const userTest = {
      uid: 'ABC567',
      username: name 
    };

    const user = getUsuarioActivo(name);

    expect(user).toEqual(userTest);
  })
})