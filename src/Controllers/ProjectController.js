import menu from 'console-menu'

class ProjectController {
  constructor () {

  }

  get view () {
    return () => {
      menu([
        { hotkey: '1', title: 'Test', action: 'whatsup' }
      ])
    }
  }
}

export default ProjectController
