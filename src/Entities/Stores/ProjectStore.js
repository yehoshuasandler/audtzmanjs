import Store from "./Store.js"
import makeProject from "../../UseCases/makeProject.js"

class ProjectStore extends Store {
  constructor (props) {
    super(props)
    this.makeItemFactory = makeProject
  }

}

export default ProjectStore
