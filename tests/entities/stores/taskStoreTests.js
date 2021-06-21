import TaskStore from '../../../src/Entities/Stores/TaskStore.js'


const startTime = new Date()
const endTime = new Date()

const input = {
  id: 'ABC',
  parentId: 'QWERT',
  categoryId: 'POI',
  projectId: 'TREWQ',
  description: 'Uploading',
  startTime: startTime,
  endTime: endTime
}

const expectedOutput= {
  id: 'ABC',
  parentId: 'QWERT',
  categoryId: 'POI',
  projectId: 'TREWQ',
  description: 'Uploading',
  startTime: startTime,
  endTime: endTime
}

const addTaskTest = () => {
  const taskStore = new TaskStore()

  taskStore.addItem(input)

  if (JSON.stringify(taskStore.items[0].props) === JSON.stringify(expectedOutput)) return true
  else return false
}


const findTaskById = () => {
  const taskStore = new TaskStore()

  taskStore.addItem(input)
  const foundTask = taskStore.findById(input.id)

  if (JSON.stringify(foundTask.props) === JSON.stringify(expectedOutput)) return true
  else return false
}


const removeTaskById = () => {
  const taskStore = new TaskStore()

  taskStore.addItem(input)
  taskStore.removeById(input.id)

  if (taskStore.items.length === 0) return true
  else return false
}

export default [
  { name: 'Store | Add Task', test: addTaskTest },
  { name: 'Store | Find Task By Id', test: findTaskById },
  { name: 'Store | Remove Task By Id', test: removeTaskById },
]
