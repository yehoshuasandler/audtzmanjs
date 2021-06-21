import Task from '../../src/Entities/Task.js'

const startTime = new Date()
const endTime = new Date()

const input = {
  id: 'ABC',
  parentId: 'QWERT',
  categoryId: 'POI',
  projectId: 'TREWQ',
  name: 'Test Task',
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

const getProps = () => {
  const task = new Task(input)
  if (JSON.stringify(task.props) === JSON.stringify(expectedOutput)) return true
  else return false
}


export default [
  { name: 'Entity | Get Task Props', test: getProps },
]