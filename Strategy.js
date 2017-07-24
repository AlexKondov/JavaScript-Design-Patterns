class Payment {
  setProvider (provider) {
    this.provider = provider
  }
  process () {
    this.provider.process()
  }
}

class PayPal {
  process () {
    console.log('Handling payment with PayPal')
  }
}

class Stripe {
  process () {
    console.log('Handling payment with Stripe')
  }
}

class Braintree {
  process () {
    console.log('Handling payment with Brantree')
  }
}

const payment = new Payment()
const paypal = new PayPal()
const stripe = new Stripe()
const braintree = new Braintree()

payment.setProvider(paypal)
payment.process()

payment.setProvider(stripe)
payment.process()

payment.setProvider(braintree)
payment.process()
