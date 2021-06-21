class Task {
  constructor (props) {
    this.id = props.id
    this.parentId = props.parentId
    this.categoryId = props.categoryId
    this.projectId = props.projectId
    this.description = props.description
    this.startTime = props.startTime
    this.endTime = props.endTime
  }

  get props () {
    return {
      id: this.id,
      parentId: this.parentId,
      categoryId: this.categoryId,
      projectId: this.projectId,
      description: this.description,
      startTime: this.startTime,
      endTime: this.endTime
    }
  }

}

export default Task
