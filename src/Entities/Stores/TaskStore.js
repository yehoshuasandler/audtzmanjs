import Store from "./Store.js"
import makeTask from "../../UseCases/makeTask.js"

class TaskStore extends Store {
  constructor (props) {
    super(props)
    this.makeItemFactory = makeTask
  }
}

export default TaskStore
