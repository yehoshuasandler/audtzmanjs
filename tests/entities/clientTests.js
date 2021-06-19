import Client from '../../src/Entities/Client.js'

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

const getClientPropsTest = () => {
  const client = new Client(input)
  if (JSON.stringify(client.props) === JSON.stringify(expectedOutput)) return true
  else return false
}


export default [
  { name: 'Entity | Get Client Props', test: getClientPropsTest },
]