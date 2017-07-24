class Click {
  constructor () {
    this.handlers = []
  }
  subscribe (fn) {
    this.handlers.push(fn)
  }
  unsubscribe (fn) {
    this.handlers = this.handlers.filter(handler => handler !== fn)
  }
  fire (data) {
    this.handlers.forEach(handler => {
      handler.call(this, data)
    })
  }
}

const click = new Click()
const clickHandler = (msg) => {
  console.log(msg)
}
const anotherClickHandler = (msg) => {
  console.log(`Second click handler: ${msg}`)
}

click.subscribe(clickHandler)
click.fire('Clicked!')
click.unsubscribe(clickHandler)
click.fire('Clicked!')
click.subscribe(clickHandler)
click.subscribe(anotherClickHandler)
click.fire('Clicked!')
