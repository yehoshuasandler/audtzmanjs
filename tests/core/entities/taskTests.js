import Task from '../../../core/Entities/Task.js'

const input = {
  id: 'ABC',
  parentId: 'QWERT',
  categoryId: 'POI',
  projectId: 'TREWQ',
  name: 'Test Task',
  description: 'Uploading'
}

const expectedOutput= {
  id: 'ABC',
  parentId: 'QWERT',
  categoryId: 'POI',
  projectId: 'TREWQ',
  name: 'Test Task',
  description: 'Uploading'
}

const expectedModifiedOutput = {
  id: 'WWW',
  parentId: 'LKL',
  categoryId: 'QAQ',
  projectId: 'QWERTY',
  name: 'New Task',
  description: 'Deploying'
}


const getId = () => {
  const task = new Task(input)
  if (task.id === expectedOutput.id) return true
  else return false
}


const setId = () => {
  const task = new Task(input)
  const newId = task.id = expectedModifiedOutput.id
  if (newId === expectedModifiedOutput.id) return true
  else return false
}

const getParentId = () => {
  const task = new Task(input)
  if (task.parentId === expectedOutput.parentId) return true
  else return false
}


const setParentId = () => {
  const task = new Task(input)
  const newId = task.parentId = expectedModifiedOutput.parentId
  if (newId === expectedModifiedOutput.parentId) return true
  else return false
}

const getCategoryId = () => {
  const task = new Task(input)
  if (task.categoryId === expectedOutput.categoryId) return true
  else return false
}


const setCategoryId = () => {
  const task = new Task(input)
  const newId = task.categoryId = expectedModifiedOutput.categoryId
  if (newId === expectedModifiedOutput.categoryId) return true
  else return false
}

const getName = () => {
  const task = new Task(input)
  if (task.name === expectedOutput.name) return true
  else return false
}

const setName = () => {
  const task = new Task(input)
  const newName = task.name = expectedModifiedOutput.name
  if (newName === expectedModifiedOutput.name) return true
  else return false
}

const getDescription = () => {
  const task = new Task(input)
  if (task.description === expectedOutput.description) return true
  else return false
}

const setDescription = () => {
  const task = new Task(input)
  const newDescription = task.description = expectedModifiedOutput.description
  if (newDescription === expectedModifiedOutput.description) return true
  else return false
}

const getProps = () => {
  const task = new Task(input)
  if (JSON.stringify(task.props) === JSON.stringify(expectedOutput)) return true
  else return false
}


export default [
  { name: 'Entity | Get Task Id', test: getId },
  { name: 'Entity | Set Task Id', test: setId },
  { name: 'Entity | Get Task Parent Id', test: getParentId },
  { name: 'Entity | Set Task Parent Id', test: setParentId },
  { name: 'Entity | Get Task Category Id', test: getCategoryId },
  { name: 'Entity | Set Task Category Id', test: setCategoryId },
  { name: 'Entity | Get Task Name', test: getName },
  { name: 'Entity | Set Task Name', test: setName },
  { name: 'Entity | Get Task Description', test: getDescription },
  { name: 'Entity | Set Task Description', test: setDescription },
  { name: 'Entity | Get Task Props', test: getProps },
]