class Toy {
  constructor (name) {
    this.name = name
  }
}

class ToyCar extends Toy {
  constructor (name) {
    super(name)
    this.material = 'plastic'
  }
}

class ToyDuck extends Toy {
  constructor (name) {
    super(name)
    this.material = 'rubber'
  }
}

class ToyFactory {
  static create () {}
}

class ToyCarFactory extends ToyFactory {
  static create (name) {
    const toy = new ToyCar(name)
    return toy
  }
}

class ToyDuckFactory extends ToyFactory {
  static create (name) {
    const toy = new ToyDuck(name)
    return toy
  }
}

const toyCar = ToyCarFactory.create('How Wheels')
const toyDuck = ToyDuckFactory.create('Duckie')
console.log(toyCar, toyDuck)
