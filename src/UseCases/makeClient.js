import { v4 as uuidv4 } from 'uuid'
import Client from "../Entities/Client.js"

const makeClient = clientProps => {
  const newClient = new Client({
    id: clientProps.id || uuidv4(),
    name: clientProps.name,
    initial: clientProps.initial,
    state: clientProps.state,
    city: clientProps.city,
    street: clientProps.street,
    phone: clientProps.phone,
    website: clientProps.website
  })

  return newClient
}

export default makeClient
