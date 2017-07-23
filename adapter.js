// our old request service
class RequestService {
  send (url, data, callBack) {
    // prepare request..
    // attach data..
    // send request..
    callBack()
  }
}

// our new request service that needs to be adapted
class AdvancedRequestService {
  setUrl (url) {
    this.url = url
  }
  setData (data) {
    this.data = data
  }
  setCallBack (callback) {
    this.callBack = callback
  }
  send () {
    // send request...
    console.log('called from advanced request class')
    this.callBack()
  }
}

// the adapter class that will allow us to use the API
// of the old service with the new one under the hood
class RequestAdapter {
  constructor () {
    this.requestService = new AdvancedRequestService()
  }
  send (url, data, callBack) {
    this.requestService.setUrl(url)
    this.requestService.setData(data)
    this.requestService.setCallBack(callBack)
    this.requestService.send()
  }
}

// we are using the same api for both classes
// underneath two different things are happening

const requestService = new RequestService()
requestService.send('http://example.com', { payload: true }, () => {
  console.log('callback called successfully')
})

const requestServiceAdapter = new RequestAdapter()
requestServiceAdapter.send('http://example.com', { payload: true }, () => {
  console.log('callback called successfully')
})
