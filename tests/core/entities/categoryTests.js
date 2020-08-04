import Category from '../../../core/Entities/Category.js'

const input = {
  id: 'ABC',
  label: 'Program',
  isBillable: true
}

const expectedOutput = {
  id: 'ABC',
  label: 'Program',
  isBillable: true
}

const expectedModifiedOutput = {
  id: 'XYZ',
  label: 'Server Support',
  isBillable: false
}

const getId = () => {
  const category = new Category(input)
  if (category.id === expectedOutput.id) return true
  else return false
}


const setId = () => {
  const category = new Category(input)
  const newId = category.id = expectedModifiedOutput.id
  if (newId === expectedModifiedOutput.id) return true
  else return false
}

const getLabel = () => {
  const category = new Category(input)
  if (category.label === expectedOutput.label) return true
  else return false
}

const setLable = () => {
  const category = new Category(input)
  const newLabel = category.label = expectedModifiedOutput.label
  if (newLabel === expectedModifiedOutput.label) return true
  else return false
}

const getisBillable = () => {
  const category = new Category(input)
  if (category.isBillable === expectedOutput.isBillable) return true
  else return false
}

const setisBillable = () => {
  const category = new Category(input)
  const newBillable = category.isBillable = expectedModifiedOutput.isBillable
  if (newBillable === expectedModifiedOutput.isBillable) return true
  else return false
}


export default [
  { name: 'Entity | Get Category Id', test: getId },
  { name: 'Entity | Set Category Id', test: setId },
  { name: 'Entity | Get Category Label', test: getLabel },
  { name: 'Entity | Set Category Label', test: setLable },
  { name: 'Entity | Get Category Billable', test: getisBillable },
  { name: 'Entity | Set Category Billable', test: setisBillable },
]