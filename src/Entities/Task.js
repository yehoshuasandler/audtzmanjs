class Task {
  constructor (props) {
    this.id = props.id
    this.parentId = props.parentId
    this.categoryId = props.categoryId
    this.projectId = props.projectId
    this.name = props.name
    this.description = props.description
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
