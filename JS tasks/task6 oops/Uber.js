class UberPrice {
    constructor(source, destination, distance) {
        this.source = source
        this.destination = destination
        this.distance = distance
    }

    getDetails() {
        console.log(`Source:${this.source},Destination:${this.destination},Distance:${this.distance}`)
    }

    setSource(newSource) {
        this.source = newSource
    }
    getSource() {
        console.log(`Source:${this.source}`)
    }
    setDestination(newDestination) {
        this.destination = newDestination
    }
    getDestination() {
        console.log(`Destination:${this.destination}`)
    }
    setDistance(newDistance) {
        this.distance = newDistance
    }
    getDistance() {
        console.log(`Distance:${this.distance}`)
    }

    calculatePrice() {
        if (this.distance <= 30) {
            console.log(`Price from ${this.source} to ${this.destination} is :`, this.distance * 10)
        }
        else if (this.distance <= 50) {
            console.log(`Price from ${this.source} to ${this.destination} is :`, this.distance * 7)
        }
        else {
            console.log(`Price from ${this.source} to ${this.destination} is :`, this.distance * 5)
        }
    }
}

const uberPrice1 = new UberPrice("Kukatpally", "Hitech City", 15)
uberPrice1.calculatePrice()
const uberPrice2 = new UberPrice("Secunderabad", "Mindspace", 40)
uberPrice2.calculatePrice()
const uberPrice3 = new UberPrice("DLF", "Hitech City", 55)
uberPrice3.calculatePrice()