import CategoryStore from "../../../src/Entities/Stores/CategoryStore.js"

const input = {
  id: 'ABC',
  label: 'Program',
}

const expectedOutput = {
  id: 'ABC',
  label: 'Program',
}

const addCategoryTest = () => {
  const categoryStore = new CategoryStore()

  categoryStore.addItem(input)

  if (JSON.stringify(categoryStore.items[0].props) === JSON.stringify(expectedOutput)) return true
  else return false
}


const findCategoryById = () => {
  const categoryStore = new CategoryStore()

  categoryStore.addItem(input)
  const foundCategory = categoryStore.findById(input.id)

  if (JSON.stringify(foundCategory.props) === JSON.stringify(expectedOutput)) return true
  else return false
}


const removeCategoryById = () => {
  const categoryStore = new CategoryStore()

  categoryStore.addItem(input)
  categoryStore.removeById(input.id)

  if (categoryStore.items.length === 0) return true
  else return false
}

export default [
  { name: 'Store | Add Category', test: addCategoryTest },
  { name: 'Store | Find Category By Id', test: findCategoryById },
  { name: 'Store | Remove Category By Id', test: removeCategoryById },
]