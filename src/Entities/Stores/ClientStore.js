import Store from './Store.js'
import makeClient from '../../UseCases/makeClient.js'

class ClientStore extends Store {
  constructor (props) {
    super(props)
    this.makeItemFactory = makeClient
  }
}

export default ClientStore