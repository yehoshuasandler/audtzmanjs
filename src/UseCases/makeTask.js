import { v4 as uuidv4 } from 'uuid'
import Task from "../Entities/Task.js"

const makeTask = taskProps => {
  const newTask = new Task({
    id: taskProps.id || uuidv4(),
    parentId: taskProps.parentId,
    categoryId: taskProps.categoryId,
    projectId: taskProps.projectId,
    name: taskProps.name,
    description: taskProps.description
  })

  return newTask
}

export default makeTask
