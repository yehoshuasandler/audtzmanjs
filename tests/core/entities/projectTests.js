import Project from '../../../src/core/Entities/Project.js'

const input = {
  id: 'ABC',
  clientId: 'QWERTY',
  categoryIds: ['TGB', 'QAZ'],
  name: 'ROSTAN'
}

const expectedOutput= {
  id: 'ABC',
  clientId: 'QWERTY',
  categoryIds: ['TGB', 'QAZ'],
  name: 'ROSTAN'
}

const expectedModifiedOutput = {
  id: 'XYZ',
  clientId: 'POTUS',
  categoryIds: ['TGB', 'QAZ', 'MNB'],
  name: 'HAULPASS'
}


const getId = () => {
  const project = new Project(input)
  if (project.id === expectedOutput.id) return true
  else return false
}


const setId = () => {
  const project = new Project(input)
  const newId = project.id = expectedModifiedOutput.id
  if (newId === expectedModifiedOutput.id) return true
  else return false
}

const getClientId = () => {
  const project = new Project(input)
  if (project.clientId === expectedOutput.clientId) return true
  else return false
}

const setClientId = () => {
  const project = new Project(input)
  const newClientId = project.clientId = expectedModifiedOutput.clientId
  if (newClientId === expectedModifiedOutput.clientId) return true
  else return false
}

const getCategoryIds = () => {
  const project = new Project(input)
  if (JSON.stringify(project.categoryIds) === JSON.stringify(expectedOutput.categoryIds)) return true
  else return false
}

const setCategoryIds = () => {
  const project = new Project(input)
  const newCategoryIds = project.categoryIds = expectedModifiedOutput.categoryIds
  if (JSON.stringify(newCategoryIds) === JSON.stringify(expectedModifiedOutput.categoryIds)) return true
  else return false
}

const getName = () => {
  const project = new Project(input)
  if (project.name === expectedOutput.name) return true
  else return false
}

const setName = () => {
  const project = new Project(input)
  const newName = project.name = expectedModifiedOutput.name
  if (newName === expectedModifiedOutput.name) return true
  else return false
}

const getProps = () => {
  const project = new Project(input)
  if (JSON.stringify(project.props) === JSON.stringify(expectedOutput)) return true
  else return false
}

const addCategoryId = () => {
  const project = new Project(input)
  project.addCategoryId('MNB')
  if (JSON.stringify(project.categoryIds) === JSON.stringify(expectedModifiedOutput.categoryIds)) return true
  else return false
}

const removeCategoryId = () => {
  const input = {
    id: 'ABC',
    clientId: 'QWERTY',
    categoryIds: ['TGB', 'QAZ'],
    name: 'ROSTAN'
  }

  const project = new Project(expectedModifiedOutput)
  const newCategories = project.removeCategoryId('MNB')

  if (JSON.stringify(newCategories) === JSON.stringify(input.categoryIds)) return true
  else return false
}


export default [
  { name: 'Entity | Get Project Id', test: getId },
  { name: 'Entity | Set Project Id', test: setId },
  { name: 'Entity | Get Project Client Id', test: getClientId },
  { name: 'Entity | Set Project Client Id', test: setClientId },
  { name: 'Entity | Get Project Category Ids', test: getCategoryIds },
  { name: 'Entity | Set Project Category Ids', test: setCategoryIds },
  { name: 'Entity | Get Project Name', test: getName },
  { name: 'Entity | Set Project Name', test: setName },
  { name: 'Entity | Set Project Props', test: getProps },
  { name: 'Entity | Add Category Id', test: addCategoryId },
  { name: 'Entity | Remove Category Id', test: removeCategoryId },
]