class Task {
  constructor (props) {
    this.id = props.id
    this.parentId = props.parentId
    this.categoryId = props.categoryId
    this.projectId = props.projectId
    this.name = props.name
    this.description = props.description
  }

  get id () { return this._id }

  set id (newId) {
    this._id = newId || this._id
    return this._id
  }
  
  get parentId () { return this._parentId }

  set parentId (newId) {
    this._parentId = newId || this._parentId
    return this._parentId
  }
  
  get categoryId () { return this._categoryId }

  set categoryId (newId) {
    this._categoryId = newId || this._categoryId
    return this._categoryId
  }
  
  get name () { return this._name }

  set name (newName) {
    this._name = newName || this._name
    return this._name
  }
  
  get description () { return this._description }

  set description (newDescription) {
    this._description = newDescription || this._description
    return this._description
  }

  get props () {
    return {
      id: this.id,
      parentId: this.parentId,
      categoryId: this.categoryId,
      projectId: this.projectId,
      name: this.name,
      description: this.description
    }
  }

}

export default Task
