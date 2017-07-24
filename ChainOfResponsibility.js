class Request {
  constructor (amount) {
    this.amount = amount
  }
  get (bill) {
    const billCount = Math.floor(this.amount / bill)
    this.amount -= billCount * bill
    console.log(`${billCount} bills of $${bill}`)
    return this
  }
}

const request = new Request(371)
request
  .get(100)
  .get(50)
  .get(20)
  .get(5)
  .get(1)
