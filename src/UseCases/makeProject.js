import { v4 as uuidv4 } from 'uuid'
import Project from '../Entities/Project.js'

const makeProject = projectProps => {
  const newProject = new Project({
    id: projectProps.id || uuidv4(),
    clientId: projectProps.clientId,
    categoryIds: projectProps.categoryIds || [],
    name: projectProps.name
  })

  return newProject
}

export default makeProject
