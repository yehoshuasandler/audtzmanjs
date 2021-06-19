import { v4 as uuidv4 } from 'uuid'
import Category from "../Entities/Category.js"

const makeCategory = categoryProps => {
  const newCategory = new Category({
    id: categoryProps.id || uuidv4(),
    label: categoryProps.label
  })

  return newCategory
}

export default makeCategory
