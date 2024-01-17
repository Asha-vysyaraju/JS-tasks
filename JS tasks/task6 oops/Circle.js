class Circle {

    constructor(radius, color) {
        this.radius = radius
        this.color = color
    }

    getRadius() {
        console.log(`Radius:${this.radius}`)
    }

    setRadius(newRadius) {
        this.radius = newRadius
    }

    setColor(newColor) {
        this.color = newColor
    }

    getColor() {
        console.log(`Color:${this.color}`)
    }

    toString() {
        console.log(`Radius:${this.radius},Color:${this.color}`)
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    getCircumference() {
        return 2 * Math.PI * this.radius
    }
}

const circle1 = new Circle(5, "red")
circle1.toString()
console.log(circle1.getArea().toFixed(2))
console.log(circle1.getCircumference().toFixed(2))

circle1.setRadius(6)
circle1.setColor("blue")
circle1.getRadius()
circle1.getColor()