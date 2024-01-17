class Person {
    constructor(name, lastName, age, contact, address) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.contact = contact
        this.address = new Place(address[0], address[1], address[2])
        this.fullName = function () {
            console.log(`Fullname:${this.name} ${this.lastName}`)
        }
    }
    setName(newName) {
        this.name = newName

    }
    getName() {
        console.log(`Name:${this.name}`)
    }
    setLastName(newLastName) {
        this.lastName = newLastName

    }
    getLastName() {
        console.log(`Lastname:${this.lastName}`)
    }
    setAge(newAge) {
        this.age = newAge

    }
    getAge() {
        console.log(`Age:${this.age}`)
    }

    setContact(newContact) {
        this.contact = newContact
    }
    getContact() {
        console.log(`Contact detaila:${this.contact}`)
    }
    getDetails() {
        console.log(`Name: ${this.name},LastName:${this.lastName},Age:${this.age},contact:${this.contact}`)
    }
    getAddress() {
        console.log(`StreetName:${this.address.strName},City:${this.address.city},PINCODE:${this.address.pin}`)
    }
}
class Place {
    constructor(strName, city, pin) {
        this.strName = strName
        this.city = city
        this.pin = pin
    }
}

const p1 = new Person("Ayan", "Khan", 20, [123456789, "ayan@gmail.com"], ["Banjara Hills", "Hyderabad", 532550])
p1.getDetails()
p1.getContact()
p1.getAddress()
p1.setLastName("Allu")
p1.fullName()