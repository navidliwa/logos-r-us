const { Circle, Triangle, Square } = require('./shapes');

describe('Shape render', () => {
  describe('Circle', () => {
    it('should return a valid SVG string', () => {
      const circle = new Circle();
      circle.response = { shapeColor: 'red' }
      const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red"/>`;
      expect(circle.render()).toEqual(expectedSVG);
    });
  });

  describe('Triangle', () => {
    it('should return a valid SVG string', () => {
      const triangle = new Triangle();
      triangle.response = { shapeColor: 'blue' }
      const expectedSVG = `
        <polygon points="150 18, 244 182, 56 182" fill="blue"/>
        `;
      expect(triangle.render()).toEqual(expectedSVG);
    });
  });
  describe('Square', () => {
    it('should return a valid SVG string', () => {
      const square = new Square();
      square.response = { shapeColor: 'yellow' }
      const expectedSVG = `
        <rect x="50" y="0" width="200" height="200" fill="yellow"/>
        `;
      expect(square.render()).toEqual(expectedSVG);
    });
  });
});