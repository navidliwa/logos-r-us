class Shapes {
    constructor(fill, response) {
        this.fill = fill;
        this.response = response;
    }
    setFill() {
        this.fill = this.response.shapeColor;
        return this.fill;
    }

}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.setFill()}"/>`
    }
}
class Triangle extends Shapes {
    render() {
        return `
        <polygon points="150 18, 244 182, 56 182" fill="${this.setFill()}"/>
        `
    }
}
class Square extends Shapes {
    render() {
        return `
        <rect x="50" y="0" width="200" height="200" fill="${this.setFill()}"/>
        `
    }
}

module.exports = { Circle, Square, Triangle }