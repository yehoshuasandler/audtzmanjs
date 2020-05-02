class Client {
  constructor (props) {
    this.id = props.id
    this.name = props.name
    this.initial = props.initial
    this.state = props.state
    this.city = props.city
    this.street = props.street
    this.phone = props.phone
    this.website = props.website
  }

  getId = () => this.id

  getName = () => this.name

  getInitial = () => this.initial

  getState = () => this.state

  getCity = () => this.city

  getStreet = () => this.street

  getPhone = () => this.phone

  getWebsite = () => this.website

  getProps = () => {
    return {
      id: this.id,
      name: this.name,
      initial: this.initial,
      state: this.state,
      city: this.city,
      street: this.street,
      phone: this.phone,
      website: this.website
    }
  }

  setName = newName => {
    this.name = newName || this.name
    return this.name
  }

  setInitial = newInitial => {
    this.initial = newInitial || this.initial
    return this.initial
  }

  setState = newState => {
    this.state = newState || this.state
    return this.state
  }

  setCity = newCity => {
    this.city = newCity || this.city
    return this.city
  }

  setStreet = newStreet => {
    this.street = newStreet || this.street
    return this.street
  }

  setPhone = newPhone => {
    this.phone = newPhone || this.phone
    return this.phone
  }

  setWebsite = newWebsite => {
    this.website = newWebsite || this.website
    return this.website
  }
}

export default Client
