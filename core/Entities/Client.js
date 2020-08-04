class Client {
  constructor (props) {
    this._id = props.id
    this._name = props.name
    this._initial = props.initial
    this.state = props.state
    this.city = props.city
    this.street = props.street
    this.phone = props.phone
    this.website = props.website
  }

  get id () { return this._id }

  set id (value) { this._id = value }

  get name () { return this._name }
  
  set name (newName) {
    this._name = newName || this._name
    return this._name
  }

  get initial () { return this._initial }

  set initial (newInitial) {
    this._initial = newInitial || this._initial
    return this._initial
  }

  get state () { return this._state }

  set state (newState) {
    this._state = newState || this._state
    return this._state
  }

  get city () { return this._city }

  set city (newCity) {
    this._city = newCity || this._city
    return this._city
  }

  get street () { return this._street }

  set street (newStreet) {
    this._street = newStreet || this._street
    return this._street
  }

  get phone () { return this._phone }

  set phone (newPhone) {
    this._phone = newPhone || this._phone
    return this._phone
  }

  get website () { return this._website }

  set website (newWebsite) {
    this._website = newWebsite || this._website
    return this._website
  }

  get props () {
    return {
      id: this._id,
      name: this._name,
      initial: this._initial,
      state: this._state,
      city: this._city,
      street: this._street,
      phone: this._phone,
      website: this._website
    }
  }
}

export default Client
