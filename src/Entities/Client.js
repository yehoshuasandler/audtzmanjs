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


  get props () {
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
}

export default Client
