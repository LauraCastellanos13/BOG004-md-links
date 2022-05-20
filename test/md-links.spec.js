const { pathExist, realtivePath, searchMd,getLinksMd } = require('../src/index.js');


describe('pathExist', () => {

  it('Should be a function', () => {
    console.log('tipo', typeof pathExist)
    expect(typeof pathExist).toBe('function');
  });

  // Test with relative path
  it('Return true', () => {
    expect(pathExist('../')).toBe(true);
  });

  // The test needs return an absolute path
  it('Return true because is an absolute path', () => {
    expect(pathExist('C:\Users\LABORATORIA\OneDrive\Documentos\Proyectos laboratoria\BOG004-md-links\src\prueba')).toBe(true);
  });

  // If the path isn´t absolute
  it('Return false because isnt an absolute path', () => {
    expect(pathExist('C:\Users\LABORATORIA\OneDrive\Documentos\Proyectos laboratoria\BOG004-md-links\src\hello')).toBe(false);
  });

});

describe('realtivePath', () => {

  it('Should be a function', () => {
    expect(typeof realtivePath).toBe('function');
  });
  it('True = relative path', () => {
    expect(realtivePath('../')).toBe(true);
  });
});
