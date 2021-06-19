import Category from '../../src/Entities/Category.js'

const input = {
  id: 'ABC',
  label: 'Program',
}

const expectedOutput = {
  id: 'ABC',
  label: 'Program',
}

const getProps = () => {
  const category = new Category(input)
  if (JSON.stringify(category.props) === JSON.stringify(expectedOutput)) return true
  else return false
}


export default [
  { name: 'Entity | Get Category Props', test: getProps },
]