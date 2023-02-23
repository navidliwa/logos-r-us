const { Circle, Triangle, Square } = require('./shapes');

describe('Shape render', () => {
    test('Circle should return a valid SVG string', () => {
      const circle = new Circle('#000000');
      const expectedSVG = '<circle cx="50" cy="50" r="50" fill="#000000" />';
      expect(circle.render()).toEqual(expectedSVG);
    });
  
    test('Triangle should return a valid SVG string', () => {
      const triangle = new Triangle('#000000');
      const expectedSVG = '<polygon points="50,0 100,100 0,100" fill="#000000" />';
      expect(triangle.render()).toEqual(expectedSVG);
    });
  
    test('Square should return a valid SVG string', () => {
      const square = new Square('#000000');
      const expectedSVG = '<rect x="0" y="0" width="100" height="100" fill="#000000" />';
      expect(square.render()).toEqual(expectedSVG);
    });
  });