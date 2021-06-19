import ClientStore from '../../../src/Entities/Stores/ClientStore.js'

const input = {
  id: 'ABC',
  name: 'jShoemakerDev',
  initial: 'JSD',
  state: 'AL',
  city: 'Birmingham',
  street: '17th Ave',
  phone: '555-225-6168',
  website: 'joshuashoemaker.github.io'
}

const expectedOutput = {
  id: 'ABC',
  name: 'jShoemakerDev',
  initial: 'JSD',
  state: 'AL',
  city: 'Birmingham',
  street: '17th Ave',
  phone: '555-225-6168',
  website: 'joshuashoemaker.github.io'
}

const addClientTest = () => {
  const clientStore = new ClientStore()

  clientStore.addItem(input)

  if (JSON.stringify(clientStore.items[0].props) === JSON.stringify(expectedOutput)) return true
  else return false
}

const findClientById = () => {
  const clientStore = new ClientStore()

  clientStore.addItem(input)
  const foundclient = clientStore.findById(input.id)

  if (JSON.stringify(foundclient.props) === JSON.stringify(expectedOutput)) return true
  else return false
}

const removeClientById = () => {
  const clientStore = new ClientStore()

  clientStore.addItem(input)
  clientStore.removeById(input.id)

  if (clientStore.items.length === 0) return true
  else return false
}

export default [
  { name: 'Store | Add Client', test: addClientTest },
  { name: 'Store | Find Client By Id', test: findClientById },
  { name: 'Store | Remove Client By Id', test: removeClientById },
]