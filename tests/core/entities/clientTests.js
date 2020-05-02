import Client from '../../../core/Entities/Client.js'

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

const expectedModifiedOutput = {
  id: 'ABC',
  name: 'jShoemaker.dev',
  initial: 'JS.D',
  state: 'GA',
  city: 'Villa Rica',
  street: 'Excess Drive',
  phone: '555-403-6168',
  website: 'jshoemaker.dev'
}


const getClientIdTest = () => {
  const client = new Client(input)
  if (client.getId() === expectedOutput.id) return true
  else return false
}

const getClientNameTest = () => {
  const client = new Client(input)
  if (client.getName() === expectedOutput.name) return true
  else return false
}

const getClientInitialTest = () => {
  const client = new Client(input)
  if (client.getInitial() === expectedOutput.initial) return true
  else return false
}

const getClientStateTest = () => {
  const client = new Client(input)
  if (client.getState() === expectedOutput.state) return true
  else return false
}

const getClientCityTest = () => {
  const client = new Client(input)
  if (client.getCity() === expectedOutput.city) return true
  else return false
}

const getClientStreetTest = () => {
  const client = new Client(input)
  if (client.getStreet() === expectedOutput.street) return true
  else return false
}

const getClientPhoneTest = () => {
  const client = new Client(input)
  if (client.getPhone() === expectedOutput.phone) return true
  else return false
}

const getClientWebsiteTest = () => {
  const client = new Client(input)
  if (client.getWebsite() === expectedOutput.website) return true
  else return false
}

const getClientPropsTest = () => {
  const client = new Client(input)
  if (JSON.stringify(client.getProps()) === JSON.stringify(expectedOutput)) return true
  else return false
}

const setClientNameTest = () => {
  const client = new Client(input)
  const newInput = client.setName(expectedModifiedOutput.name)
  if (newInput === expectedModifiedOutput.name) return true
  else return false
}

const setClientInitialTest = () => {
  const client = new Client(input)
  const newInput = client.setInitial(expectedModifiedOutput.initial)
  if (newInput === expectedModifiedOutput.initial) return true
  else return false
}

const setClientStateTest = () => {
  const client = new Client(input)
  const newInput = client.setState(expectedModifiedOutput.state)
  if (newInput === expectedModifiedOutput.state) return true
  else return false
}

const setClientCityTest = () => {
  const client = new Client(input)
  const newInput = client.setCity(expectedModifiedOutput.city)
  if (newInput === expectedModifiedOutput.city) return true
  else return false
}

const setClientStreetTest = () => {
  const client = new Client(input)
  const newInput = client.setStreet(expectedModifiedOutput.street)
  if (newInput === expectedModifiedOutput.street) return true
  else return false
}

const setClientPhoneTest = () => {
  const client = new Client(input)
  const newInput = client.setPhone(expectedModifiedOutput.phone)
  if (newInput === expectedModifiedOutput.phone) return true
  else return false
}

const setClientWebsiteTest = () => {
  const client = new Client(input)
  const newInput = client.setWebsite(expectedModifiedOutput.website)
  if (newInput === expectedModifiedOutput.website) return true
  else return false
}

export default [
  { name: 'Entity | Get Client Id', test: getClientIdTest },
  { name: 'Entity | Get Client Name', test: getClientNameTest },
  { name: 'Entity | Get Client Initial', test: getClientInitialTest },
  { name: 'Entity | Get Client State', test: getClientStateTest },
  { name: 'Entity | Get Client City', test: getClientCityTest },
  { name: 'Entity | Get Client Street', test: getClientStreetTest },
  { name: 'Entity | Get Client Phone', test: getClientPhoneTest },
  { name: 'Entity | Get Client Website', test: getClientWebsiteTest },
  { name: 'Entity | Get Client Props', test: getClientPropsTest },
  { name: 'Entity | Set Client Name', test: setClientNameTest },
  { name: 'Entity | Set Client Initial', test: setClientInitialTest },
  { name: 'Entity | Set Client State', test: setClientStateTest },
  { name: 'Entity | Set Client City', test: setClientCityTest },
  { name: 'Entity | Set Client Street', test: setClientStreetTest },
  { name: 'Entity | Set Client Phone', test: setClientPhoneTest },
  { name: 'Entity | Set Client website', test: setClientWebsiteTest },
]