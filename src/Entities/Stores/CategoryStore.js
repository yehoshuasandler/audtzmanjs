import Store from './Store.js'
import makeCategory from '../../UseCases/makeCategory.js'

class CategoryStore extends Store {
  constructor (props) {
    super(props)
    this.makeItemFactory = makeCategory
  }
}

export default CategoryStore