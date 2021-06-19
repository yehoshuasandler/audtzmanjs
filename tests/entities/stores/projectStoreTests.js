import ProjectStore from "../../../src/Entities/Stores/ProjectStore.js"

const input = {
  id: 'ABC',
  clientId: 'QWERTY',
  categoryIds: ['TGB', 'QAZ'],
  name: 'ROSTAN'
}

const expectedOutput = {
  id: 'ABC',
  clientId: 'QWERTY',
  categoryIds: ['TGB', 'QAZ'],
  name: 'ROSTAN'
}

const addProjectTest = () => {
  const projectStore = new ProjectStore()

  projectStore.addItem(input)

  if (JSON.stringify(projectStore.items[0].props) === JSON.stringify(expectedOutput)) return true
  else return false
}


const findCategoryById = () => {
  const projectStore = new ProjectStore()

  projectStore.addItem(input)
  const foundProject = projectStore.findById(input.id)

  if (JSON.stringify(foundProject.props) === JSON.stringify(expectedOutput)) return true
  else return false
}


const removeProjectById = () => {
  const projectStore = new ProjectStore()

  projectStore.addItem(input)
  projectStore.removeById(input.id)

  if (projectStore.items.length === 0) return true
  else return false
}

export default [
  { name: 'Store | Add Project', test: addProjectTest },
  { name: 'Store | Find Project By Id', test: findCategoryById },
  { name: 'Store | Remove Project By Id', test: removeProjectById },
]