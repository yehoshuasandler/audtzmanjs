class Project {
  constructor (props) {
    this.id = props.id
    this.clientId = props.clientId
    this.categoryIds = props.categoryIds
    this.name = props.name
  }

  addCategoryId = (id) => {
    this._categoryIds.push(id)
    return this.categoryIds
  }

  removeCategoryId = id => {
    const idIndex = this._categoryIds.findIndex(i => i === id)
    this._categoryIds.splice(idIndex, 1)
    return this.categoryIds
  }

  get categoryIds () { return this._categoryIds }

  set categoryIds (newIds) {
    if (!Array.isArray(newIds)) {
      console.error('When setting categoryIds overtly, the value type must be an array')
      return this._categoryIds
    } else {
      this._categoryIds = newIds
      return this._categoryIds
    }
  }

  get props () {
    return {
      id: this.id,
      clientId: this.clientId,
      categoryIds: this.categoryIds,
      name: this.name
    }
  }
}

export default Project
