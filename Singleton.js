class Singleton {
  constructor () {
    this.instance = null
  }
  createInstance () {
    const instance = {
      msg: 'this is a singleton instance'
    }
    return instance
  }
  static getInstance () {
    if (this.instance === null) {
      this.instance = this.createInstance()
    }

    return this.instance
  }
}

const inst1 = Singleton.getInstance()
const inst2 = Singleton.getInstance()

console.log(`Objects are the same? ${inst1 === inst2}`)
