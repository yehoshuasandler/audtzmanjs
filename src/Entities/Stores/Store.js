class Store {
  constructor (props = {}) {
    this.items = props.items || []
    this.makeItemFactory = props.makeItemFactory
  }

  addItem = (itemProps) => {
    const newItem = this.makeItemFactory(itemProps)
    this.items.push(newItem)
  }

  findById = id => this.items.find(c => c.id === id)

  removeById = id => {
    const itemToRemoveIndex = this.items.findIndex(i => i.id === id)
    this.items.splice(itemToRemoveIndex, 1)
  }

  get props () {
    const itemProps = this.items.map(i => i.props)
    return itemProps
  }
}

export default Store
