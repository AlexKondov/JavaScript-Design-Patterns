const FAMILY_TYPE = 'family'
const SPORTS_TYPE = 'sports'
const TRANSPORT_TYPE = 'transport'

class VehicleFactory {
  create (type) {
    let vehicle

    switch (type) {
      case FAMILY_TYPE:
        vehicle = new FamilyVehicle()
        break
      case SPORTS_TYPE:
        vehicle = new SportsVehicle()
        break
      case TRANSPORT_TYPE:
        vehicle = new TransportVehicle()
        break
    }

    return vehicle
  }
}

class Vehicle {}

class FamilyVehicle extends Vehicle {
  constructor () {
    super()
    this.doors = 4
    this.attachment = false
  }
}

class SportsVehicle extends Vehicle {
  constructor () {
    super()
    this.doors = 2
    this.attachment = false
  }
}

class TransportVehicle extends Vehicle {
  constructor () {
    super()
    this.doors = 4
    this.attachment = true
  }
}

const vehicleFactory = new VehicleFactory()
console.log(vehicleFactory.create(FAMILY_TYPE))
console.log(vehicleFactory.create(SPORTS_TYPE))
console.log(vehicleFactory.create(TRANSPORT_TYPE))
