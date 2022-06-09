describe('demo.test.js tests', ()=>{
  test('should be equal',()=>{
    const m1 = "Hola Mundo";
    const m2 = `Hola Mundo`;
    expect(m1).toBe(m2);
  });
});