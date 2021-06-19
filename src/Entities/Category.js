class Category {
  constructor (props) {
    this.id = props.id
    this.label = props.label
  }

  get props () {
    return {
      id: this.id,
      label: this.label
    }
  }
}

export default Category