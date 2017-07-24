class VehicleShop {
  assemble (builder) {
    builder.firstStep()
    builder.secondStep()
    return builder.produce()
  }
}

class Builder {
  firstStep () {}
  secondStep () {}
  produce () {}
}

class CarBuilder {
  constructor () {
    this.car = null
  }
  firstStep () {
    this.car = new Car()
  }
  secondStep () {
    this.car.addParts()
  }
  produce () {
    return this.car
  }
}

class BikeBuilder {
  constructor () {
    this.bike = null
  }
  firstStep () {
    this.bike = new Bike()
  }
  secondStep () {
    this.bike.addParts()
  }
  produce () {
    return this.bike
  }
}

class Car {
  addParts () {
    this.doors = 4
    this.tires = 4
  }
}

class Bike {
  addParts () {
    this.tires = 2
  }
}

const vehicleShop = new VehicleShop()
const carBuilder = new CarBuilder()
const bikeBuilder = new BikeBuilder()

const car = vehicleShop.assemble(carBuilder)
const bike = vehicleShop.assemble(bikeBuilder)

console.log(car, bike)
